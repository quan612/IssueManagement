import React, { useState } from "react";
// import gql from "graphql-tag";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

import { ThemeIcon } from "shared/components/Icon";

const thumbsContainer = {
  display: "flex",
  marginTop: 16,
};

const thumbStyle = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const errorStyle = {
  color: "#c45e5e",
  fontSize: "0.75rem",
};

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
  const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const [currentFile, setFile] = useState();
  const [imagePreview, setPreview] = useState();

  const thumb = (
    <div style={thumbStyle}>
      <div style={thumbInner}>
        <img src={imagePreview} style={img} />
      </div>
    </div>
  );

  const onChange = async (e) => {
    const { validity, files } = e.target;
    let file = files[0];
    if (validity.valid) {
      console.log(file);
      let obj_Url = URL.createObjectURL(file);
      if (acceptedImageTypes.includes(file.type)) {
        setPreview(obj_Url);
      }

      setFile(file);
    }
  };

  const handleCancel = () => {
    if (imagePreview) {
      let obj_Url = URL.revokeObjectURL(currentFile);
      setPreview(obj_Url);
    }
    setFile();
  };

  const upload = () => {
    // if (validity.valid && hasFile) {
    //   uploadFile(file);
    // }
  };

  return (
    <div>
      <label className="image-upload-container my-3 border-solid text-teal-400 font-bold">
        <span className=""> Select Image </span>
        <input
          className="hidden"
          type="file"
          //    accept="image/*"
          onChange={onChange}
        />
      </label>

      {imagePreview && (
        <aside className="my-2" style={thumbsContainer}>
          {thumb}
        </aside>
      )}

      {currentFile && !imagePreview && (
        <aside className="my-2" style={thumbsContainer}>
          <ThemeIcon icon="file" size="4x" color="grey" />
          <span className="ml-2">{currentFile.name}</span>
        </aside>
      )}
      <div className="mt-1">
        <button
          // *ngIf="selectedImage.status === 'LOADED'"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          // (click)="uploadImage()"
        >
          Upload
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2"
          type="button"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const UploadAttachments = withFileUpload(Attachments);

export { UploadAttachments };
