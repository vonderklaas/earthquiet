import { gql } from 'graphql-request';

import graphQLClient from '../constants';

export const getCategoryTitles = () => {
  const getCategoryTitlesQuery = gql`
    query {
      categories {
        title
        slug
        id
      }
    }
  `;

  return graphQLClient.request(getCategoryTitlesQuery);
};
