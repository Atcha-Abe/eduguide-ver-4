import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      email
      username
      levelStrand
      school
    }
  }
`;
