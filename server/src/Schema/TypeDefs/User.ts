import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    levelStrand: { type: GraphQLString },
    school: { type: GraphQLString },
    password: { type: GraphQLString },
    is_admin: { type:GraphQLBoolean }
  }),
});

export const UserInfoType = new GraphQLObjectType({
  name: "UserInfo",
  fields: () => ({
    user: {type:UserType},
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});