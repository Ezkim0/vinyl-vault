const UserModel = require('../../../models/User');


const userMutations = {
  Mutation: {
    async signup(root, args) {

      //check auth google auth is real


      if(args.hasOwnProperty('email')) {
        const user = await UserModel.findOne({email:args.email}).exec()
        if(user) {
          return user
        } else {
          args = {
            ...args,
            created: new Date
          }
    
          const user = new UserModel(args);
          return result = await user.save()
        }
      }
      return null  
    },
    
    async (root, args) {
      // check auth
      
    },
    
		removeUser(root, { id }) {
			UserModel.findByIdAndRemove(id).exec().then(() => {
				console.log('Deleted:', id);
			}).catch(function(error){
        console.log('Error checking deleting');
      })
		}
  }
}

module.exports = [
  userMutations
]