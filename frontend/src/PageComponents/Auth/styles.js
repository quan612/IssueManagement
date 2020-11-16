import styled from "styled-components";
import tw from "tailwind.macro";

const AuthPageContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
`;

const Panel = styled.div`
  ${tw`shadow-lg rounded-lg`}
  background:${(props) => props.theme.card.background};

  margin: 0 auto 20px;
  max-width: 430px;

  /* fixed collapse margin */
  overflow: auto;
`;

const Title = styled.h2`
  ${tw`text-center`}
  color: ${(props) => props.theme.colors.primary};
  margin: 20px;

  margin: 40px 20px 0;
  font-weight: 200;
  font-size: 2rem;
`;

const FormWrapper = styled.form`
  ${tw`flex-auto `}
  padding:3rem;
`;

const PanelFooter = styled.div`
  padding: 20px;
  display: block;
  font-size: 17px;
  color: #4a5568;

  background-color: #f5f5f5;
  border-top: 1px solid #ddd;

  a {
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      cursor: pointer;
    }
  }
`;

AuthPageContainer.displayName = "PageContainer";
Panel.displayName = "Panel";
FormWrapper.displayName = "FormWrapper";
Title.displayName = "Title";

export { AuthPageContainer as PageContainer, Content, Panel, Title, FormWrapper, PanelFooter };
