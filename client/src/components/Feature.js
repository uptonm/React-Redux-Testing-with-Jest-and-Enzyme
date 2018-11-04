import React, { Component } from "react";
import requireAuth from "./requireAuth";
class Feature extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Hello, Feature Page!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <button className="btn btn-primary btn-lg" href="#">
            Learn more
          </button>
        </div>
      </div>
    );
  }
}

export default requireAuth(Feature);
