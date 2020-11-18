import React, { useState, useEffect } from "react";

import { withIssueAttachment } from "shared/HOC/withIssueAttachment";

import { ThemeIcon } from "shared/components/Icon";
import { Button } from "shared/components/Button";

import { ThumbsContainer, ThumbStyle, ThumbInner, Img } from "./styles";

const Attachments = ({ attachments, uploadFile, loading, error }) => {
  const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png", "image/jpg"];
  const [currentFile, setFile] = useState();
  const [imagePreview, setPreview] = useState();
  // console.log(attachments);

  useEffect(() => {}, [attachments]);

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
      URL.revokeObjectURL(currentFile);
      setPreview();
    }
    setFile();
  };

  const onUpload = async () => {
    let res = await uploadFile(currentFile);
    if (res) {
      if (imagePreview) {
        URL.revokeObjectURL(currentFile);
        setPreview();
      }
      setFile();
    }
  };

  return (
    <div>
      <div className="attachment-heading table w-full mt-4 mb-5">
        <label className="text-base font-bold">Attachments:</label>
        <label className="image-upload-container  border-solid text-teal-400 font-bold">
          <ThemeIcon icon="plus-circle" size="lg" color="blue" className="ml-2" />
          <input className="hidden" type="file" onChange={onChange} />
        </label>
        <div className="issue-attachment mt-4">
          {attachments && (
            <ThumbsContainer>
              {attachments.map((attachment) => {
                return attachment.mimetype.startsWith("image/") ? (
                  <ThumbStyle key={attachment.id}>
                    <ThumbInner href={attachment.url} target="_blank">
                      <Img src={attachment.url} />
                    </ThumbInner>
                  </ThumbStyle>
                ) : (
                  <ThumbStyle key={attachment.id}>
                    <ThumbInner href={attachment.url} target="_blank">
                      <ThemeIcon icon="file" size="4x" color="#B3BECE" />
                      <span className="ml-2">{attachment.filename}</span>
                    </ThumbInner>
                  </ThumbStyle>
                );
              })}
            </ThumbsContainer>
          )}
        </div>
      </div>

      {imagePreview && (
        <ThumbsContainer className="my-2">
          <ThumbStyle>
            <ThumbInner>
              <Img src={imagePreview} />
            </ThumbInner>
          </ThumbStyle>
        </ThumbsContainer>
      )}

      {currentFile && !imagePreview && (
        <ThumbsContainer className="my-2">
          <ThemeIcon icon="file" size="4x" color="grey" />
          <span className="ml-2">{currentFile.name}</span>
        </ThumbsContainer>
      )}
      {currentFile && (
        <div className="mt-1">
          <Button isWorking={loading} variant="primary" onClick={onUpload}>
            Upload
          </Button>

          <Button className="ml-2" disabled={loading} variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

const UploadAttachments = withIssueAttachment(Attachments);
export { UploadAttachments };

// nice button view bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
// nice button view bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2
