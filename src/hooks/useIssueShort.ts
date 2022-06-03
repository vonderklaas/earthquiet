import { gql, GraphQLClient } from 'graphql-request';

export const useIssueShort = (pageSlug: string | string[]) => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const issuesQueryShort = gql`
    query ($pageSlug: String!) {
      solutions(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        date
        keywords
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(issuesQueryShort, vars);
};
