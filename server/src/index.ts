import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Community } from "./Entities/Community";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "eduguide",
    username: "root",
    password: "@EduGuide2021",
    logging: true,
    synchronize: true,
    entities: [Users, Community],

  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
