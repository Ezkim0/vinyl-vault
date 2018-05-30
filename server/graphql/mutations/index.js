const merge = require('lodash/merge');

const UserMutations = require('./user');
//const VinylMutations = require('./vinyl');

const rootMutations = {
  Mutation: { 

  }
}

const mutateFunctions = {

};

exports.resolvers = merge(
    UserMutations,
    mutateFunctions
)