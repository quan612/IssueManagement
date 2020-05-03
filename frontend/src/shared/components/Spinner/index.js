import React from "react";
import { ClipLoader } from "react-spinners";
import { Container } from "./styles";

const Loading = ({ label, color, size }) => {
  return (
    <Container>
      {label && <span>{label}</span>}
      <ClipLoader
        // css={{ ...styles.spinner }}
        sizeUnit={"px"}
        size={size}
        color={color}
        loading={true}
      />
    </Container>
  );
};

export default Loading;
