/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRevenue = /* GraphQL */ `
  mutation CreateRevenue(
    $input: CreateRevenueInput!
    $condition: ModelRevenueConditionInput
  ) {
    createRevenue(input: $input, condition: $condition) {
      id
      year
      revenue
      createdAt
      updatedAt
    }
  }
`;
export const updateRevenue = /* GraphQL */ `
  mutation UpdateRevenue(
    $input: UpdateRevenueInput!
    $condition: ModelRevenueConditionInput
  ) {
    updateRevenue(input: $input, condition: $condition) {
      id
      year
      revenue
      createdAt
      updatedAt
    }
  }
`;
export const deleteRevenue = /* GraphQL */ `
  mutation DeleteRevenue(
    $input: DeleteRevenueInput!
    $condition: ModelRevenueConditionInput
  ) {
    deleteRevenue(input: $input, condition: $condition) {
      id
      year
      revenue
      createdAt
      updatedAt
    }
  }
`;
