import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-1 text-center">Sorry to see you go...</h1>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
