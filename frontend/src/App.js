import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import GlobalStyles from "./components/styles/Global";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import * as ROUTES from "./routes";
import * as PAGES from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      {/* <hr /> */}
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={PAGES.DASHBOARD} />
        <Route exact path={ROUTES.PROJECTS} render={() => <PAGES.PROJECTS />} />
        <Route exact path={ROUTES.USERS} render={() => <PAGES.USERS />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// App.js
// import React from "react";
// import styled from "styled-components";
// import tw from "tailwind.macro";
// // Style 1: Only requires the tw import.
// const Spacer = tw.div`py-4`;
// const Paragraph = tw.p`flex items-center py-8 justify-center text-xl text-white bg-blue-500`;
// // Style 2: Requires both the styled and tw imports.
// const Container = styled.div`
//   ${tw`flex justify-center`}
// `;
// const Button = styled.button`
//   ${tw`px-8 py-4 text-xl font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
// `;
// function App() {
//   return (
//     <div className="App">
//       <Spacer></Spacer>
//       <Paragraph>
//         Hello Create React App + Tailwind + Styled Components!
//       </Paragraph>
//       <Container>
//         <Button>Button</Button>
//       </Container>
//     </div>
//   );
// }
// export default App;
