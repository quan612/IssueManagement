import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import gql from "graphql-tag";
// import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

import { ThemeIcon } from "shared/components/Icon";

import { Button } from "shared/components/Button";

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
  width: 130,
  height: 130,
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
  mutation FILE_UPLOAD_MUTATION($file: Upload!, $issue: ID!) {
    uploadFile(file: $file, issue: $issue) {
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

  const handleUploadFile = async (file, issue) => {
    let res = await uploadFile({ variables: { file, issue } }).catch((err) =>
      console.log(err)
    );
    return res;
  };

  return (
    <BaseComponent
      loading={loading}
      error={error}
      {...props}
      uploadFile={(file, issue) => handleUploadFile(file, issue)}
    />
  );
};

const Attachments = ({ attachments, uploadFile, loading, error }) => {
  const match = useRouteMatch();
  const { issueId } = match.params;
  const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const [currentFile, setFile] = useState();
  const [imagePreview, setPreview] = useState();

  const onChange = async (e) => {
    const { validity, files } = e.target;
    let file = files[0];

    if (validity.valid) {
      if (acceptedImageTypes.includes(file.type)) {
        let obj_Url = URL.createObjectURL(file);
        setPreview(obj_Url);
      }
    }
    setFile(file);
  };

  const onCancel = () => {
    if (imagePreview) {
      let obj_Url = URL.revokeObjectURL(currentFile);
      setPreview(obj_Url);
    }
    setFile();
  };

  const onUpload = async () => {
    let res = await uploadFile(currentFile, issueId);
    if (res) {
      if (imagePreview) {
        let obj_Url = URL.revokeObjectURL(currentFile);
        setPreview(obj_Url);
      }
      setFile();
    }
  };

  // nice button view bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
  // nice button view bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2

  return (
    <div>
      <div className="attachment-heading table w-full mt-8 mb-5">
        <label className="text-base font-bold">Attachments:</label>
        <label className="image-upload-container my-3 border-solid text-teal-400 font-bold">
          <ThemeIcon icon="plus-circle" size="lg" color="blue" className="ml-2" />
          <input
            className="hidden"
            type="file"
            //    accept="image/*"
            onChange={onChange}
          />
        </label>
        <div className="issue attachment">
          {attachments &&
            attachments.map((attachment) => {
              return (
                <aside className="my-2" style={thumbsContainer} key={attachment.id}>
                  <div style={thumbStyle}>
                    <a style={thumbInner} href={attachment.url} target="_blank">
                      <img src={attachment.url} style={img} />
                    </a>
                  </div>
                </aside>
              );
            })}
        </div>
      </div>

      {imagePreview && (
        <aside className="my-2" style={thumbsContainer}>
          <div style={thumbStyle}>
            <div style={thumbInner}>
              <img src={imagePreview} style={img} />
            </div>
          </div>
        </aside>
      )}

      {currentFile && !imagePreview && (
        <aside className="my-2" style={thumbsContainer}>
          <ThemeIcon icon="file" size="4x" color="grey" />
          <span className="ml-2">{currentFile.name}</span>
        </aside>
      )}
      {currentFile && (
        <div className="mt-1">
          <Button isWorking={loading} variant="primary" onClick={onUpload}>
            Upload
          </Button>

          <Button disabled={loading} variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

const UploadAttachments = withFileUpload(Attachments);

export { UploadAttachments };
