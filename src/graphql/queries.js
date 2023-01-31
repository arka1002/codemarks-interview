/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRevenue = /* GraphQL */ `
  query GetRevenue($id: ID!) {
    getRevenue(id: $id) {
      id
      year
      revenue
      createdAt
      updatedAt
    }
  }
`;
export const listRevenues = /* GraphQL */ `
  query ListRevenues(
    $filter: ModelRevenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRevenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        revenue
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
