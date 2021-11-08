import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";

export const CREATE_USER = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    levelStrand: { type: GraphQLString },
    school: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { email, username, levelStrand, password } = args;
    await Users.insert({ email, username, levelStrand, password });
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("USERNAME DOESNT EXIST");
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });

      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Users.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};
