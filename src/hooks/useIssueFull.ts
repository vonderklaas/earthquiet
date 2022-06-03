import { gql, GraphQLClient } from 'graphql-request';

export const useIssueFull = (pageSlug: string | string[]) => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const useIssueFullQuery = gql`
    query ($pageSlug: String!) {
      solutions(where: { slug: $pageSlug }) {
        title
        description
        slug
        generalText
        consequences
        solutions
        date
        keywords
        categorySlug
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(useIssueFullQuery, vars);
};
