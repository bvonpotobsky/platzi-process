require("dotenv").config();

const { makeExecutableSchema } = require("graphql-tools");

const express = require("express");
const gqlMiddleware = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");

const app = express();
const PORT = 3000;

const resolvers = require("./lib/resolvers");

// schema
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/graphiql",
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running at PORT http://localhost:3000/graphiql");
});
