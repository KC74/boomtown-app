import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolver';

const typeDefs = `
    type User {
        id: ID!
        fullname: String!
        bio: String
        email: String!
        owneditems: [Items]
        borroweditems: [Items]
    }

    type Tags {
        tagsid: ID!
        title: String!
    }

    type Items {
        id: ID!
        title: String!
        description: String
        imageurl: String
        itemowner: User!
        createdon: String!
        borrower: User
    }

    type Query {
        users: [User]
        user(id: ID!): User
        items: [Items]
        item(id: ID!): Items

    }

    type Mutation {
        addItem(
            title: String!
            description: String
            imageurl: String!
            tags: [String]
            itemowner: ID!
        ): Items
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})