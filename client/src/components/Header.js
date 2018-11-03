import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/sign-out">Sign-Out</Link>
          <Link to="/feature">Hidden Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/sign-up">Sign-Up</Link>
          <Link to="/sign-in">Sign-In</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
