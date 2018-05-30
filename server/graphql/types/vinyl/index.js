const Vinyl = `
type Vinyl {
  _id: ID!,
  artist: String, 
  album: String, 
  size: String,
  
  public: Boolean,

  created: Date!,
  modified: Date!
}
`;

module.exports = () => (
  [Vinyl]
);