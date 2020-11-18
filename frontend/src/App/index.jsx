import React from "react";
import Apollo from "./ApolloClient";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Routes from "App/Routes/index";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import dark from "shared/themes/dark";
import light from "shared/themes/light";

import "../styles/tailwind.out.css";

function App() {
  return (
    <Apollo>
      <NormalizeStyles />
      <ThemeProvider theme={light}>
        <BaseStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Apollo>
  );
}

export default App;
