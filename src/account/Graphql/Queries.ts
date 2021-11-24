import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      email
      username
      levelStrand
      school
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getAllPost {
    getAllPost {
      id
      comment  
    }
  }
`;