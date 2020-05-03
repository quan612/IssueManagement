import React, { Fragment } from "react";
import { ApolloProvider } from "react-apollo";
// import GlobalStyles from "./components/styles/Global";
import styled, { ThemeProvider } from "styled-components";
import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

import { BrowserRouter } from "react-router-dom";

import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Routes from "./routes";
import { customResolvers } from "./customResolvers";

const client = new ApolloClient({
  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        issue: (_, { id }, { getCacheKey }) =>
          getCacheKey({ __typename: "Issue", id }),
      },
    },
  }),

  link: createHttpLink({
    credentials: "include",
    uri: "http://localhost:5555/",
  }),
  resolvers: customResolvers,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
