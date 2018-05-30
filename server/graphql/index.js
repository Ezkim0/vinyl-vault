const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash/merge');

const { typeDefs } = require('./types');
const { resolvers:queries } = require('./queries');
const { resolvers:mutations } = require('./mutations');

const resolvers = merge(
  queries,
  mutations
)

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});