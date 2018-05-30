const GraphQLDateTime = require('graphql-iso-date');
const GraphQLJSON = require('graphql-type-json');
const merge = require('lodash/merge');


const UserResolvers = require('./user');
const VinylResolvers = require('./vinyl');

const rootResolvers = {
  Query: { 

  }
}

const resolveFunctions = {
  Date: GraphQLDateTime,
  JSON: GraphQLDateTime
};

exports.resolvers = merge(
  UserResolvers,
  VinylResolvers,
  resolveFunctions
)