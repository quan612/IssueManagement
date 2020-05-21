import React from "react";
import Avatar from "react-avatar";
import { Container } from "./styles";

// specifying className just in case we want to override the avatar style with styled-component
const UserAvatar = ({ className, user, size = 30, round = true, src }) => {
  return (
    <Container className={className}>
      <Avatar
        name={user.name}
        src={src}
        size={size}
        textSizeRatio={2}
        round={round}
      />
    </Container>
  );
};

export default UserAvatar;
