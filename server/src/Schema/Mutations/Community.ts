import { GraphQLID, GraphQLString } from "graphql";
import { Community } from "../../Entities/Community";
import { CommunityType } from "../TypeDefs/Community";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_COMMUNITY = {
    type: CommunityType,
    args: {
      id: { type: GraphQLID },
      comment: { type: GraphQLString },
      
    },
    async resolve(parent: any, args: any) {
      const { comment } = args;
      await Community.insert({
        comment
      });
      return args;
    },
  };


  export const DELETE_COMMUNITY = {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
      const id = args.id;
      await Community.delete(id);
  
      return { successful: true, message: "DELETE WORKED" };
    },
  };