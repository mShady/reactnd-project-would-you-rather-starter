import React, { Component } from "react";
import AuthedUser from "./AuthedUser";

class Header extends Component {
  render() {
    return <AuthedUser />;
  }
}

export default Header;
