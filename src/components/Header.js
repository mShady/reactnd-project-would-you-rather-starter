import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AuthedUser from "./AuthedUser";

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add">New Question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leader Board</NavLink>
          </li>
          <li>
            <AuthedUser />
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
