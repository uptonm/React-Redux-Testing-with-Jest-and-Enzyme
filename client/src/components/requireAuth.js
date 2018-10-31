import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Component just rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />; // Passes props to child component, in this case, the action creators to save comments
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
