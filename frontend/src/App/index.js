import React, { Fragment } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./clientResolvers";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import theme from "shared/themes/dark";

import { devEndpoint, prodEndpoint } from "./config";

console.log("Currently running at " + process.env.NODE_ENV);

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      issue: (_, { id }, { getCacheKey }) => getCacheKey({ __typename: "Issue", id }),
    },
  },
});

const link = createHttpLink({
  credentials: "include",
  //uri: process.env.NODE_ENV === `development` ? devEndpoint : prodEndpoint,
  uri: prodEndpoint,
});

const client = new ApolloClient({
  cache,
  resolvers,
  link,
});

//initialize the cache
cache.writeData({
  data: {
    toasts: [],
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <NormalizeStyles />
        <ThemeProvider theme={theme}>
          <BaseStyles />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
