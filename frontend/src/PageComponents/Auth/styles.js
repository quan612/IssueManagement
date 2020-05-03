import styled from "styled-components";
import tw from "tailwind.macro";

export const PageContainer = styled.div`
  ${tw` flex content-center items-center justify-center h-full`}
`;

export const Panel = styled.div`
  ${tw`w-full md:w-1/2 lg:w-4/12 px-3 shadow-lg rounded-lg bg-gray-300 border-0`}
`;

export const FormWrapper = styled.form`
  ${tw`flex-auto px-4 lg:px-10 py-10 pt-4`}
`;

export const Title = styled.div`
  ${tw`text-gray-600 text-2xl font-bold text-center`}
`;
