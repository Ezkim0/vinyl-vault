import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

class HeaderView extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      email: localStorage.getItem("email")
    }
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  logout() {
    console.log("logout",this.props)
    
  }
  
  render() {
    
    const username = this.state.email || this.state.email;

    return <div>
        <h3>Header</h3>
        <button onClick={this.logout.bind(this)}>logout</button>
        {
          username || <div>{username}</div>
        }
      </div>
  }
}

export default (withRouter(HeaderView));