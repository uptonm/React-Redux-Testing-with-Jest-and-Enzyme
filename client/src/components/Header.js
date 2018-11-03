import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="navbar-nav ml-auto">
          <li
            className={`nav-item ${
              this.props.location.pathname === "/sign-out" ? "active" : ""
            }`}
          >
            <Link to="/sign-out" className="nav-link">
              Sign-Out
            </Link>
          </li>
          <li
            className={`nav-item ${
              this.props.location.pathname === "/feature" ? "active" : ""
            }`}
          >
            <Link to="/feature" className="nav-link">
              Hidden Feature
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li
            className={`nav-item ${
              this.props.location.pathname === "/sign-in" ? "active" : ""
            }`}
          >
            <Link to="/sign-in" className="nav-link">
              Sign-In
            </Link>
          </li>
          <li
            className={`nav-item ${
              this.props.location.pathname === "/sign-up" ? "active" : ""
            }`}
          >
            <Link to="/sign-up" className="nav-link">
              Sign-Up
            </Link>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Redux Auth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(withRouter(Header));
