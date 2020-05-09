import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo";

import { Container, ToastItem, ToastMessage, transitionStyle } from "./styles";

import {
  LOCAL_STATE_QUERY,
  DELETE_TOAST_MUTATION,
} from "shared/GraphQL/Client";

import { useTransition } from "react-spring";

const timeOut = 5000;

const Toast = ({ position }) => {
  const { data } = useQuery(LOCAL_STATE_QUERY);
  const [deleteToast] = useMutation(DELETE_TOAST_MUTATION);

  //handle auto-delete
  useEffect(() => {
    const interval = setInterval(() => {
      if (data && data.toasts && data.toasts.length > 0) {
        let id = data.toasts[0].id;
        deleteToast({ variables: { id } });
      }
    }, timeOut);
    return () => {
      clearInterval(interval);
    };
  }, [data, deleteToast]);

  //handle transitions
  const transitions = useTransition(
    data.toasts,
    (item) => item.id,
    transitionStyle[position]
  );

  return (
    <Container position={position}>
      {transitions.map(({ item, props, key }) => {
        return (
          <ToastItem
            key={key}
            style={props}
            onClick={() => deleteToast({ variables: { id: item.id } })}
          >
            <ToastMessage type={item.type}>{item.message}</ToastMessage>
          </ToastItem>
        );
      })}
    </Container>
  );
};

export default Toast;
