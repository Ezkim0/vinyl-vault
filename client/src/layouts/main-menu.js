import React, { Component } from 'react';

const MainMenu = ({ children }) => (
  <div className="main-menu">
    <ul>
      { children.map((item, index) => {
        return (
          <li>
            { item }
          </li>
        );
      }) }
    </ul>
  </div>
);
export default MainMenu;