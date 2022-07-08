import { gql } from 'graphql-request';

import graphQLClient from '../constants';

export const getCategoryTitle = (pageSlug: string | string[]) => {
  const getCategoryTitleQuery = gql`
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

  return graphQLClient.request(getCategoryTitleQuery, vars);
};
