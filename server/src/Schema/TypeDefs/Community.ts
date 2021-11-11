import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "Community",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    post: { type: GraphQLString },
  }),
});
