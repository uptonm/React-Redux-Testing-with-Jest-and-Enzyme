import React, { Component } from "react";
import requireAuth from "./requireAuth";
class Feature extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-1">Hello Feature!</h1>
      </div>
    );
  }
}

export default requireAuth(Feature);
