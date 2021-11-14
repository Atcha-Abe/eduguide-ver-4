import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "edugzlxq_eduguide",
    username: "u0zavi5cst8ww8xh",
    password: "tbK0IgF5UIcCuXzwId3N",
    logging: true,
    synchronize: true,
    entities: [Users],
    url: "mysql://u0zavi5cst8ww8xh:tbK0IgF5UIcCuXzwId3N@bqjkxjqcj9bty6g6hbkk-mysql.services.clever-cloud.com:3306/bqjkxjqcj9bty6g6hbkk",
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
