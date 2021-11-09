import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import {
  CREATE_USER,
  DELETE_USER,
  EDIT_PROFILE,
  UPDATE_PASSWORD,
  USER_LOGIN,
} from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    userLogin: USER_LOGIN,
    editProfile: EDIT_PROFILE,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
