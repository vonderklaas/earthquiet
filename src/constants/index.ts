import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
  headers: {
    Authorization: process.env.GRAPH_TOKEN,
  },
});

export default graphQLClient;
