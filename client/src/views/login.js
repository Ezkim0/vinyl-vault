import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import { graphql, Query, Mutation, } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome'
import jwt from 'jsonwebtoken';

import Page from '../layouts/page'

const LOGIN = gql`
  mutation ($email: String!) {
    login(email: $email)
  }
`;

class LoginView extends Component {
  constructor(props, ctx) {
    super(props, ctx);
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  executeMutation(response) {
    this.props.mutate({
      variables: {
        email: response.profileObj.email
      },
    }).then( result => {
      if(result && result.data && result.data.login) {
        console.log("logged in", result.data.login)
        const decoded = jwt.decode(result.data.login);
        localStorage.setItem("_id", decoded._id);
        localStorage.setItem("email", decoded.email);
        localStorage.setItem("token", result.data.login);
        this.props.history.push('/user/' + decoded._id)
      }
    });
  }

  render() {
    return <GoogleLogin
        clientId="582389113790-10frak81mhlsk16limrgkvfni598aq8l.apps.googleusercontent.com"
        onSuccess={this.executeMutation.bind(this)}
      >
      <span>Login with Google</span>
    </GoogleLogin>
  }
}

export default graphql(LOGIN)(withRouter(LoginView));