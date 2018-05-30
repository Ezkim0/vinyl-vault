const Vinyl = require("./vinyl")
const User = require("./user")


// TODO: Tähän pitää lisätä loadash merge
const RootQuery = `
  scalar Date
  scalar JSON

  type Query {
    vinyls(options: String): [Vinyl],
    vinyl(id: ID!): Vinyl,
    
    user(id: ID): User
  }

  type Mutation {
    signup(email: String name: String): User ,
    removeUser(id: ID!): User,
  }
`; 

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

exports.typeDefs = [
  SchemaDefinition,
  RootQuery,
  Vinyl,
  User
]