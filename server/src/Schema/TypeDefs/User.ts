import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    levelStrand: { type: GraphQLString },
    school: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
