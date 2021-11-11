import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/Community";
import { MessageType } from "../TypeDefs/Messages";
import { Community } from "../../Entities/Community";

export const CREATE_POST = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    post: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, post } = args;
    await Users.insert({
      username,
      post,
    });
    return args;
  },
};
