const { S3Upload } = require("../../services/amazon-s3");

const FileMutation = {
  async uploadFile(parent, { file }, ctx, info) {
    return await processUpload(await file, ctx);
  },
};

module.exports = FileMutation;

const processUpload = async (file, ctx) => {
  const { createReadStream, filename, mimetype, encoding } = await file;

  const stream = createReadStream();
  // const { localId, path } = await storeUpload({ stream, filename }); // do local storage here

  const s3Response = await S3Upload({ Key: filename, Body: stream }).promise();

  if (!s3Response) throw new Error("S3 Upload failed");
  const url = s3Response.Location;

  // Sync with Prisma
  const data = {
    filename,
    mimetype,
    encoding,
    url: s3Response.Location,
  };

  const { id } = await ctx.prisma.createFile({ ...data }, ` { id } `);

  const newFile = {
    id,
    filename,
    mimetype,
    encoding,
    url,
  };

  console.log("saved prisma file:");
  console.log(newFile);

  return newFile;
};
