import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import { graphql, Query, Mutation, } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from 'react-google-login';

import Page from '../layouts/page'
import Content from '../layouts/content'
import MainMenu from '../layouts/main-menu'

const UserQuery = gql`query user($id: ID) {
  user(id: $id) {
    _id
    email
    name
    googleid
    imageUrl
    vinyls
  }
}
`

const Vinyls = () => (
  <Query
    query={UserQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      
      const items = data.user.vinyls.map( item => {
        return (
          <h4 key={item._id}>{item.artist} : {item.album}</h4>
        )
      })

      return <div>{items}</div>
    }}
  </Query>
);

class UserView extends Component {
  constructor(props, ctx) {
    super(props, ctx);
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return <Page>
      <Content>
        <h1>User vinyls</h1>
      <Vinyls/>
      </Content>
    </Page>
  }
}

export default graphql(UserQuery, {
  options: (ownProps) => {
    console.log(ownProps.match.params.id)
    return ({
    variables: {
      id: ownProps.match.params.id
    }
  })}
})(withRouter(UserView));