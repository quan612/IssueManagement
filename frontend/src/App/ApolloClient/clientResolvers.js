import { LOCAL_STATE_QUERY } from "shared/GraphQL/Client";

const resolvers = {
  Mutation: {
    createToast(_, variables, { cache }) {
      const data = cache.readQuery({
        query: LOCAL_STATE_QUERY,
      });

      const id = Math.floor(Math.random() * 1000) + 1;
      const newToast = Object.assign({}, variables, { id });

      cache.writeQuery({
        query: LOCAL_STATE_QUERY,
        data: {
          toasts: [newToast, ...data.toasts],
        },
      });

      return data;
    },
    deleteToast(_, variables, { cache }) {
      const data = cache.readQuery({
        query: LOCAL_STATE_QUERY,
      });

      const { id } = variables;

      data.toasts = data.toasts.filter((toast) => toast.id !== id);

      cache.writeQuery({ query: LOCAL_STATE_QUERY, data });
      return data;
    },
  },
};

export default resolvers;
