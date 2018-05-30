import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { graphql, Query, Mutation, } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from 'react-google-login';

import Page from '../layouts/page'
import Content from '../layouts/content'
import MainMenu from '../layouts/main-menu'

const Vinyls = () => (
  <Query
    query={gql`{
      vinyls {
        _id
        artist
      }}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.vinyls.map(({ artist }, index) => (
        <div key={index}>
        <h5>{`${artist}`}</h5>
        </div>
      ));
    }}
  </Query>
);

const VinylsContainer = () => (
  <Page>
    <Content>
      <h1>Vinyls</h1>
      <Vinyls />
    </Content>
  </Page>    
);
export default VinylsContainer;