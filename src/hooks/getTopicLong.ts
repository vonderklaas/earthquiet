import { gql } from 'graphql-request';

import graphQLClient from '../constants';

export const getTopicLong = (pageSlug: string | string[]) => {
  const getTopicLongQuery = gql`
    query ($pageSlug: String!) {
      improvements(where: { slug: $pageSlug }) {
        title
        description
        slug
        general
        consequences
        improvements
        date
        categorySlug
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  return graphQLClient.request(getTopicLongQuery, vars);
};
