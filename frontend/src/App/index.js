import React, { Fragment } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./clientResolvers";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";
import dark from "shared/themes/dark";
import light from "shared/themes/light";

import { devEndpoint, prodEndpoint } from "./config";

import "../styles/tailwind.out.css";

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      issue: (_, { id }, { getCacheKey }) => getCacheKey({ __typename: "Issue", id }),
    },
  },
});

const httpLink = createHttpLink({
  credentials: "include",
  uri: process.env.NODE_ENV === `development` ? devEndpoint : prodEndpoint,
});

const uploadLink = createUploadLink({
  credentials: "include",
  uri: process.env.NODE_ENV === `development` ? devEndpoint : prodEndpoint,
});

const link = ApolloLink.split((operation) => operation.getContext().hasUpload, uploadLink, httpLink);

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
        <ThemeProvider theme={light}>
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
