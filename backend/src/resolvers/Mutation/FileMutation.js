const { S3Upload } = require("../../services/amazon-s3");
const { v4: uuidv4 } = require("uuid");

const FileMutation = {
  async uploadFile(parent, { file, issue }, ctx, info) {
    return await processUpload(await file, issue, ctx, info);
  },
};

module.exports = FileMutation;

const processUpload = async (file, issue, ctx, info) => {
  try {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const key = uuidv4();

    const s3Response = await S3Upload({
      Key: `${key}/${filename}`,
      Body: createReadStream(),
      ContentType: mimetype,
    }).promise();

    if (!s3Response) throw new Error("S3 Upload failed");
    const url = s3Response.Location;

    // Sync with Prisma
    const data = {
      filename,
      mimetype,
      encoding,
      url: s3Response.Location,
      issue: {
        connect: {
          id: issue,
        },
      },
    };

    const { id } = await ctx.prisma.createFile({ ...data }, ` { id } `);

    const newFile = {
      id,
      filename,
      mimetype,
      encoding,
      url,
    };

    const updateIssue = await ctx.prisma.issue({ id: issue }, info);
    updateIssue.file = newFile;

    // let log = await handleCreateLog(ctx, actionType, updateIssue, updateIssue);

    console.log("saved prisma file:");
    console.log(newFile);

    return newFile;
  } catch {
    (error) => console.log(error);
  }
};
