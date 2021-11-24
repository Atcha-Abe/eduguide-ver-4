import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommunityType = new GraphQLObjectType({
  name: "Community",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    
  }),
});
