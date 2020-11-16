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

export const apolloClient = new ApolloClient({
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
