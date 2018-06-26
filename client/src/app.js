import React, { Component } from 'react';
import ApolloClient from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import VinylsContainer from './views/vinyls'
import LoginView from './views/login'
import UserView from './views/user'
import Header from './views/header'

import './app.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//user id 5aff3ecebdb4813744ec08ad

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="app">
        <Header />
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className="content">
              <Route exact path="/" component={VinylsContainer} />
              <Route exact path="/user/:id" component={UserView} />
              <Route exact path="/login" component={LoginView} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;