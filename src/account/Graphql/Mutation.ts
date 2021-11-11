import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $name: String!
    $username: String!
    $levelStrand: String!
    $school: String!
    $password: String!
  ) {
    createUser(
      email: $email
      name: $name
      username: $username
      levelStrand: $levelStrand
      school: $school
      password: $password
    ) {
      id
      email
      name
      username
      levelStrand
      school
    }
  }
`;

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    message
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

export const EDIT_PROFILE = gql`
  mutation editProfile(
    $username: String!
    $levelStrand: String!
    $school: String!
  ) {
    editProfile(
      newUsername: $username
      newLevelStrand: $levelStrand
      newSchool: $school
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
