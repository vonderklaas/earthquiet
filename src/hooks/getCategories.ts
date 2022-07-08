import { gql } from 'graphql-request';

import graphQLClient from '../constants';

export const getCategories = () => {
  const getCategoriesQuery = gql`
    query {
      categories {
        title
        slug
        id
        description
      }
    }
  `;

  return graphQLClient.request(getCategoriesQuery);
};
