import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolver';

const typeDefs = `
type User {
    id: ID!
    fullName: String!
    bio: String
    email: String!
    owneditems: [Items]
    borroweditems: [Items]
}

type Items {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: User!
    createdon: String!
    available: Boolean!
    borrower: User
}

type Query {
    users: [User]
    user(id: ID!): User
    items: [Items]
    item(id: ID!): Items

  }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})