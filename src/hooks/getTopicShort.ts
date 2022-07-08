import { gql } from 'graphql-request';

import graphQLClient from '../constants';

export const getTopicShort = (pageSlug: string | string[]) => {
  const getTopicShortQuery = gql`
    query ($pageSlug: String!) {
      improvements(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        date
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(getTopicShortQuery, vars);
};
