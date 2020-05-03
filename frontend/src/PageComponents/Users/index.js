import React, { useState } from "react";
import { withEditUser } from "shared/HOC/withUserMutation";

import { PageContainer, Panel, FormWrapper, Title } from "./styles";
import { Section } from "shared/components/Section";

import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/Button/styles";
import UserAvatar from "shared/components/Avatar";

const Users = ({ authentication, onUpdateUser, updating, error }) => {
  const [isEdit, setEdit] = useState(false);
  const [image, setImg] = useState(authentication.avatar);
  const [userData, setUserData] = useState(authentication);

  const handleUploadAvatar = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "worldwatch");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/mrleewatch/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImg(file.secure_url);
  };

  const handleUpdateUserInfo = async (user) => {
    const newUserInfo = { ...user, avatar: image };
    setUserData(newUserInfo);
    const res = await onUpdateUser(newUserInfo);
  };

  return (
    <PageContainer>
      <div
        className="flex flex-col "
        style={{
          top: "100px",
          height: "300px",
          width: "500px",
          position: "relative",
        }}
      >
        <div className=" flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-xl rounded-lg bg-gray-800">
          <div className="px-6">
            <div className="flex justify-center">
              <UserAvatar
                className=" border-none absolute -ml-6 -mt-8"
                user={userData}
                size={125}
                src={image}
              />
            </div>
            <div className="mt-16">
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
              <br />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default withEditUser(Users);

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
      <label
        className="cursor-pointer text-blue-600 hover:text-blue-800 text-sm font-bold"
        onClick={onEdit}
      >
        Edit
      </label>
    </>
  );
};

const UserEdit = ({
  user,
  onSubmit,
  onCancel,
  handleUploadAvatar,
  submitting,
}) => {
  const [updateUser, setUser] = useState(user);
  const [inputError, setError] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value !== "") setError({});
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async () => {
    if (updateUser.name === "") {
      setError({ message: "Name cannot be null" });
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
      <Section title="Permission">
        {user.permissions.map((permission, index) => (
          <span key={index}>{permission}</span>
        ))}
      </Section>

      <input
        type="file"
        name="file"
        placeholder="Upload Avatar"
        onChange={handleUploadAvatar}
      />

      <ButtonWrapper>
        <Button
          disable={submitting}
          isWorking={submitting}
          variant="info"
          onClick={handleOnSubmit}
        >
          Save
        </Button>
        <Button disabled={submitting} variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </ButtonWrapper>
    </>
  );
};
