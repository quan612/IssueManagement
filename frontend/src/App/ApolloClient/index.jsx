import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./clientResolvers";

import { devEndpoint, prodEndpoint } from "./config";

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

const apolloClient = new ApolloClient({
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

const Apollo = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Apollo;
