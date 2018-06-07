import React, { Component } from 'react';
import ApolloClient from "apollo-boost";

import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import VinylsContainer from './views/vinyls'
import LoginView from './views/login'
import UserView from './views/user'

import './app.css';


const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="app">
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