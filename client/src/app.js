import React, { Component } from 'react';
import ApolloClient from "apollo-boost";

import { ApolloProvider, Query } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
        <Route exact path="/" component={VinylsContainer} />
        <Route exact path="/user/:id" component={UserView} />
        <Route exact path="/login" component={LoginView} />
      </div>
    </Router>
  </ApolloProvider>
);

export default App;