import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import { graphql, Query, Mutation, } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome'

import Page from '../layouts/page'

const SIGNUP = gql`
  mutation ($email: String!) {
    signup(email: $email) { 
      _id
      email
    }
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
      if(result && result.data && result.data.signup) {
        this.props.history.push('/user/' + result.data.signup._id)
      }
    });
  }

  render() {
    return <GoogleLogin
        clientId="582389113790-10frak81mhlsk16limrgkvfni598aq8l.apps.googleusercontent.com"
        onSuccess={this.executeMutation.bind(this)}
        onFailure={this.executeMutation.bind(this)}
      >
      <span>Login with Google</span>
    </GoogleLogin>
  }
}

export default graphql(SIGNUP)(withRouter(LoginView));