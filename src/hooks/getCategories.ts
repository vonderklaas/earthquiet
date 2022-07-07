import { gql, GraphQLClient } from 'graphql-request';

export const getCategories = () => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const getCategoriesQuery = gql`
    query {
      categories {
        title
        slug
        id
        description
        icon {
          url
        }
      }
    }
  `;

  return graphQLClient.request(getCategoriesQuery);
};
