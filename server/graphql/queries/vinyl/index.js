const VinylModel = require('../../../models/Vinyl');


const vinylResolvers = {
  Query: { 
    vinyls: (root, { options }) => {
      
      let populate = ''
      let sort = { created: -1 }
      if(options) {
        optionItems = JSON.parse(options)
        
        if(optionItems) {
          // Populate
          if(optionItems.populate) {
            populate = optionItems.populate
          }

          // Sort
          if(optionItems.sort) {
            sort = optionItems.sort
          }
        }
      }

      return VinylModel
      .find()
      .populate(populate)
      .sort(sort)
    },
    vinyl: (root, { id }) => VinylModel.findById(id)
  }
}

module.exports = [
  vinylResolvers
]