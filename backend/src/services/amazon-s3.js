const aws = require("aws-sdk");
const config = require("../config/dev");

const s3 = new aws.S3({
  accessKeyId: config.S3_ACCESS_KEY_ID,
  secretAccessKey: config.S3_SECRET_ACCESS_KEY,
  params: {
    ACL: "public-read",
    Bucket: config.S3_BUCKET,
    CacheControl: "max-age=31536000",
    // Expires: "Sun Jan 02 2022 16:00:00 GMT-0800 (PST)",
  },
});

exports.S3Upload = (file) => s3.upload(file);
