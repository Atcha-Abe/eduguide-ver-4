import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/Community";
import { Community } from "../../Entities/Community";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Community.find();
  },
};
