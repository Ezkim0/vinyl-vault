import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { graphql, Query, Mutation, } from "react-apollo";
import gql from "graphql-tag";
import GoogleLogin from 'react-google-login';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Page from '../layouts/page'
import Content from '../layouts/content'
import MainMenu from '../layouts/main-menu'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

      return <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Artist</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.vinyls.map(({ artist }, index) => (
              <TableRow key={index}>
                <CustomTableCell component="th" scope="row">
                  {`${artist}`}
                </CustomTableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      
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