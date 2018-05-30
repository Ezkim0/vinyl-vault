const UserModel = require('../../../models/User');


const userResolvers = {
  Query: { 
    user: (root, { id }) => {
      return UserModel
      .findById("5aff3ecebdb4813744ec08ad")
      .populate('vinyls')
    }
  }
}

module.exports = [
  userResolvers
]