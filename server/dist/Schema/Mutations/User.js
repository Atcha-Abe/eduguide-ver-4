"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.UPDATE_PASSWORD = exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
exports.CREATE_USER = {
  type: User_1.UserType,
  args: {
    email: { type: graphql_1.GraphQLString },
    name: { type: graphql_1.GraphQLString },
    username: { type: graphql_1.GraphQLString },
    levelStrand: { type: graphql_1.GraphQLString },
    school: { type: graphql_1.GraphQLString },
    password: { type: graphql_1.GraphQLString },
  },
  resolve(parent, args) {
    return __awaiter(this, void 0, void 0, function* () {
      const { name, username, password, levelStrand, school } = args;
      yield Users_1.Users.insert({
        name,
        username,
        password,
        levelStrand,
        school,
      });
      return args;
    });
  },
};
exports.UPDATE_PASSWORD = {
  type: Messages_1.MessageType,
  args: {
    username: { type: graphql_1.GraphQLString },
    oldPassword: { type: graphql_1.GraphQLString },
    newPassword: { type: graphql_1.GraphQLString },
  },
  resolve(parent, args) {
    return __awaiter(this, void 0, void 0, function* () {
      const { username, oldPassword, newPassword } = args;
      const user = yield Users_1.Users.findOne({ username: username });
      if (!user) {
        throw new Error("USERNAME DOESNT EXIST");
      }
      const userPassword =
        user === null || user === void 0 ? void 0 : user.password;
      if (oldPassword === userPassword) {
        yield Users_1.Users.update(
          { username: username },
          { password: newPassword }
        );
        return { successful: true, message: "PASSWORD UPDATED" };
      } else {
        throw new Error("PASSWORDS DO NOT MATCH!");
      }
    });
  },
};

exports.DELETE_USER = {
  type: Messages_1.MessageType,
  args: {
    id: { type: graphql_1.GraphQLID },
  },
  resolve(parent, args) {
    return __awaiter(this, void 0, void 0, function* () {
      const id = args.id;
      yield Users_1.Users.delete(id);
      return { successful: true, message: "DELETE WORKED" };
    });
  },
};
