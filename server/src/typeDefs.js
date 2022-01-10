import { gql } from "apollo-server-express";


export const typeDefs = gql`

type Query {
    hello:String!
    cats:[Cat!]!
    users:[User!]!
}

type Cat {
    id:ID!
    name:String!
}

type User {
    id:ID!
    name:String!
    email:String!
    password:String!
}

type StatusCode {
    status:Boolean
}

type Mutation {
    createCat(name:String!):Cat!
    createAUser( 
        name:String!
        email:String!
        password:String!) : User!

    loginControl(
        email:String!
        password:String!) :User!
}


`;