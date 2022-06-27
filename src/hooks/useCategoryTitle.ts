import { gql, GraphQLClient } from 'graphql-request';

export const useCategoryTitle = (pageSlug: string | string[]) => {
  const graphQLClient = new GraphQLClient(process.env.API_CONTENT_URL, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const useCategoryTitleQuery = gql`
    query ($pageSlug: String!) {
      category(where: { slug: $pageSlug }) {
        title
        description
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(useCategoryTitleQuery, vars);
};
