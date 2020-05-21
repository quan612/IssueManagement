import React, { Fragment } from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { ThemeProvider } from "styled-components";
import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import theme from "shared/themes/dark";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { devEndpoint, prodEndpoint } from "./config";

import resolvers from "./clientResolvers";

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      issue: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: "Issue", id }),
    },
  },
});

const link = createHttpLink({
  credentials: "include",
  // uri: "http://localhost:5555/",
  uri: `https://jira-yoga-clone.herokuapp.com`,
  // uri: process.env.NODE_ENV === "development" ? devEndpoint : prodEndpoint,
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
