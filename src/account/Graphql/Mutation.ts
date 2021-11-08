import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $username: String!, $levelStrand: String!, $school: String! $password: String!) {
    createUser(email: $email, username: $username, levelStrand: $levelStrand, school: $school, password: $password) {
      id
      email
      username
      levelStrand
      school
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $username: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      username: $username
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
