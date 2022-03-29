import express from "express"
import "reflect-metadata"
const { ApolloServer } = require('apollo-server-express');
import http from 'http'
import { PostResolver } from "./resolvers/post";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";

const main = async () => {

    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'personalWebsite',
        type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
        clientUrl: 'localhost:5432', // defaults to 'mongodb://localhost:27017' for mongodb driver
      });

    const schema = await buildSchema({
        resolvers: [PostResolver]
    })

    const server = new ApolloServer({ schema });

    const app = express()
    //const port = 4000

    const httpServer = http.createServer(app);

    await server.start()

    server.applyMiddleware({ app, path: "/" })

    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

main().catch((err) => {
    console.error(err);
});