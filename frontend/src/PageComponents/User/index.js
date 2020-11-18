import React, { useState } from "react";
import { withUserUpdate } from "shared/HOC";

import { PageContainer, Wrapper, PanelContainer, UserDetailsWrapper } from "./styles";
import { Section } from "shared/components/Section";

import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/styles";
import UserAvatar from "shared/components/Avatar";
import { ErrorMessage } from "shared/components/ErrorMessage";

const User = ({ authentication, onUpdateUser, updating }) => {
  const [isEdit, setEdit] = useState(false);
  const [image, setImg] = useState(authentication.avatar);
  const [userData, setUserData] = useState(authentication);

  const handleUploadAvatar = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "worldwatch");

    const res = await fetch("https://api.cloudinary.com/v1_1/mrleewatch/image/upload", {
      method: "POST",
      body: data,
    });

    const file = await res.json();
    setImg(file.secure_url);
  };

  const handleUpdateUserInfo = async (user) => {
    const newUserInfo = { ...user, avatar: image };
    setUserData(newUserInfo);
    await onUpdateUser(newUserInfo);
  };

  return (
    <PageContainer>
      <Wrapper>
        <PanelContainer>
          <div className="flex justify-center">
            <UserAvatar className="-mt-24" user={userData} size={200} src={image} />
          </div>
          <UserDetailsWrapper>
            {isEdit ? (
              <UserEdit
                user={userData}
                onSubmit={handleUpdateUserInfo}
                onCancel={() => {
                  setImg(userData.avatar);
                  setEdit(false);
                }}
                handleUploadAvatar={handleUploadAvatar}
                submitting={updating}
              />
            ) : (
              <UserDetails user={userData} onEdit={() => setEdit(true)} />
            )}
          </UserDetailsWrapper>
        </PanelContainer>
      </Wrapper>
    </PageContainer>
  );
};

export default withUserUpdate(User);

const UserDetails = ({ user, onEdit }) => {
  return (
    <>
      <Section title="Email">{user.email}</Section>
      <Section title="Name">{user.name}</Section>
      <Section title="Permission">
        {user.permissions.map((permission, index) => (
          <span key={index}>{permission}</span>
        ))}
      </Section>
      <Button variant="primary-outline" onClick={onEdit} className="mt-2">
        Edit
      </Button>
    </>
  );
};

const UserEdit = ({ user, onSubmit, onCancel, handleUploadAvatar, submitting }) => {
  const [updateUser, setUser] = useState(user);
  const [inputError, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value !== "") setError("");
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async () => {
    if (updateUser.name === "") {
      setError("Name cannot be null");
      return;
    }

    onSubmit(updateUser);
  };

  return (
    <>
      <Section title="Name">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          maxLength={25}
          value={updateUser.name}
          onChange={handleOnChange}
          onKeyDown={(event) => {
            if (event.keyCode === KeyCodes.ENTER) handleOnSubmit();
          }}
        />
      </Section>
      {inputError && <ErrorMessage error={inputError} />}

      <Section title="Permission">
        {user.permissions.map((permission, index) => (
          <span key={index}>{permission}</span>
        ))}
      </Section>

      <Section title="Change Avatar">
        <input
          type="file"
          name="file"
          placeholder="Upload Avatar"
          onChange={handleUploadAvatar}
          className="mt-2"
        />
      </Section>

      <ButtonWrapper className="mt-2">
        <Button disable={submitting} isWorking={submitting} variant="info" onClick={handleOnSubmit}>
          Save
        </Button>
        <Button disabled={submitting} variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </ButtonWrapper>
    </>
  );
};
