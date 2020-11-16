const aws = require("aws-sdk");
const config = require("../config/dev");

const s3 = new aws.S3({
  accessKeyId: config.S3_ACCESS_KEY_ID,
  secretAccessKey: config.S3_SECRET_ACCESS_KEY,
  params: {
    ACL: "public-read",
    Bucket: config.S3_BUCKET,
  },
});

exports.S3Upload = (file) => s3.upload(file);
