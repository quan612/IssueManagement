const { S3Upload } = require("../../services/amazon-s3");
const { v4: uuidv4 } = require("uuid");
let util = require("./log.js");

const FileMutation = {
  async uploadFile(parent, { file, issue, actionType }, ctx, info) {
    return await processUpload(await file, issue, actionType, ctx, info);
  },
};

module.exports = FileMutation;

const processUpload = async (file, issue, actionType, ctx, info) => {
  try {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const key = uuidv4();

    const s3Response = await S3Upload({
      Key: `${key}/${filename}`,
      Body: createReadStream(),
      ContentType: mimetype,
    }).promise();

    if (!s3Response) throw new Error("S3 Upload failed");

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

    const newFile = await ctx.prisma.createFile({ ...data }, info);

    const updateIssue = await ctx.prisma.issue({ id: issue }, info);
    updateIssue.file = newFile;

    let res = await util.handleCreateLog(ctx, actionType, updateIssue, updateIssue);

    return newFile;
  } catch {
    (error) => console.log(error);
  }
};
