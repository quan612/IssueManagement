import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

export const PageContainer = styled.div`
  ${tw` mx-auto px-4 h-full`}
  div {
    ${tw`flex content-center items-center justify-center h-full`}
  }
`;

export const LoginContainer = styled.div`
  ${tw`w-full lg:w-4/12 px-4`}
  .inner-login {
    ${tw`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0`}
  }
`;

export const FormWrapper = styled.div`
  ${tw`flex-auto px-4 lg:px-10 py-10 pt-0`}
`;

export const LoginLabel = styled.div`
  ${tw`text-gray-600 text-sm font-bold`}
`;

export const LoginForm = styled.form`
  div {
    ${tw`relative w-full mb-3`}
    label {
      ${tw`block uppercase text-gray-700 text-xs font-bold mb-2`}
    }
    input {
      ${tw`px-3 py-3  text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full`}
    }
  }
  .btnWrapper {
    ${tw`text-center mt-6`}
    button {
      ${tw`bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full`}
    }
  }
`;
