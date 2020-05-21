import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useOutsideClick } from "shared/hooks/useOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Wrapper,
  OverlayContainer,
  ModalContainer,
  ModalContent,
} from "./styles";

const Modal = ({ isOpen, onClose, render }) => {
  const modalRef = useRef();
  useOutsideClick(modalRef, null, onClose);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <Wrapper>
          <OverlayContainer />
          <ModalContainer ref={modalRef}>
            <FontAwesomeIcon
              icon="window-close"
              className="cursor-pointer z-50 absolute right-0 "
              onClick={onClose}
              color="red"
            />
            <ModalContent>{render({ close: onClose })}</ModalContent>
          </ModalContainer>
        </Wrapper>
      </>,
      $root
    )
  );
};

const $root = document.getElementById("root");

export default Modal;
