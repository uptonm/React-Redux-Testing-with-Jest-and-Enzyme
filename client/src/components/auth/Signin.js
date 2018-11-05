import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const emailField = ({ input, meta, type, placeholder, min, max }) => {
  return (
    <input
      type="email"
      className="form-control"
      id="emailField"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      value={input.value}
      onChange={input.onChange}
    />
  );
};
const passwordField = ({ input, meta, type, placeholder, min, max }) => {
  return (
    <input
      type="password"
      className="form-control"
      id="passwordField"
      aria-describedby="passwordHelp"
      placeholder="Enter password"
      value={input.value}
      onChange={input.onChange}
    />
  );
};
class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit(this.onSubmit)}>
        <h1 className="display-4">Sign-In</h1>
        <hr />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Field name="email" type="text" component={emailField} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <Field name="password" type="password" component={passwordField} />
        </div>
        <div>{this.props.errorMessage}</div>
        <button className="btn btn-lg btn-success">Login</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "sign-in" })
)(Signin);
