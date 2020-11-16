import React from "react";
// import gql from "graphql-tag";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

export const FILE_UPLOAD_MUTATION = gql`
  mutation FILE_UPLOAD_MUTATION($file: Upload!) {
    uploadFile(file: $file) {
      id
      filename
      mimetype
      encoding
      url
    }
  }
`;

export const withFileUpload = (BaseComponent) => ({ ...props }) => {
  const [uploadFile, { data, loading, error }] = useMutation(FILE_UPLOAD_MUTATION, {
    context: { hasUpload: true },
  });

  const handleUploadFile = async (file) => {
    console.log(file);

    let res = await uploadFile({ variables: { file } }).catch((err) => console.log(err));
    return res;
  };

  return (
    <BaseComponent loading={loading} error={error} {...props} uploadFile={(file) => handleUploadFile(file)} />
  );
};

const Attachments = ({ uploadFile }) => {
  const onChange = async (e) => {
    const { validity, files } = e.target;
    let file = files[0];

    if (validity.valid) {
      uploadFile(file);
    }
  };

  return (
    <label className="image-upload-container my-3">
      <span className=""> Select Image </span>
      <input
        className="hidden"
        type="file"
        //    accept="image/*"
        onChange={onChange}
      />
    </label>
  );
};

const UploadAttachments = withFileUpload(Attachments);

export { UploadAttachments };
