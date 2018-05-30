const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');


const mongoose = require('./config/mongoose');
const db = mongoose();
const schema = require('./graphql');

// Initialize the app
const app = express();
app.use(cors())

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(8080, () => {
  console.log('Go to http://localhost:8080/graphiql to run queries!');
});