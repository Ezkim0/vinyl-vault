const User = `
type User {
  _id: ID,
  email: String,
  name: String,
  googleid: String,
  imageUrl: String,
  
  vinyls: [JSON],

  created: Date!,
  modified: Date!
}
`;

module.exports = () => (
  [User]
);