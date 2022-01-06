import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongoose from "mongoose"
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";



//Database and Server Connection
async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    await mongoose.connect('mongodb://localhost:27017/test3', { useNewUrlParser: true });

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}


startApolloServer(typeDefs, resolvers);