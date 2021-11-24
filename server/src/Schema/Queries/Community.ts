import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Community } from "../../Entities/Community";
import { CommunityType } from "../TypeDefs/Community";

export const GET_ALL_POSTS = {
  type: new GraphQLList(CommunityType),
  resolve() {
    return Community.find();
  },
};
