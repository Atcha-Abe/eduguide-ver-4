import { GraphQLID, GraphQLString } from "graphql";
import { Community } from "../../Entities/Community";
import { CommunityType } from "../TypeDefs/Community";

export const CREATE_COMMUNITY = {
    type: CommunityType,
    args: {
      id: { type: GraphQLID },
      comment: { type: GraphQLString },
      
    },
    async resolve(parent: any, args: any) {
      const { id, comment } = args;
      await Community.insert({
        id,
        comment
      });
      return args;
    },
  };