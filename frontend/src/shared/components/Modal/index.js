import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useOutsideClick } from "shared/hooks/useOutsideClick";
import { ThemeIcon } from "shared/components/Icon";

import { Wrapper, OverlayContainer, ModalContainer, ModalContent } from "./styles";

const Modal = ({ isOpen, onClose, render, isConfirm = false }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    if (isConfirm === true) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Any unsaved changes will be lost?")) onClose();
    } else onClose();
  };

  useOutsideClick(modalRef, null, handleCloseModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <Wrapper>
        <OverlayContainer>
          <ModalContainer ref={modalRef}>
            <ThemeIcon
              icon="window-close"
              className="cursor-pointer z-50 absolute right-0 "
              onClick={onClose}
              color="red"
            />
            <ModalContent>{render({ close: onClose })}</ModalContent>
          </ModalContainer>
        </OverlayContainer>
      </Wrapper>,
      $root
    )
  );
};

const $root = document.getElementById("root");

export default Modal;
