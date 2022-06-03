import { gql, GraphQLClient } from 'graphql-request';

export const useIssuesIds = () => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const issuesQuery = gql`
    query {
      solutions {
        categoryParent {
          id
        }
      }
    }
  `;

  return graphQLClient.request(issuesQuery);
};
