import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); // Keeps page from attempting to reload on submit

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <h4 className="display-4 text-center">Add a Comment</h4>
          <textarea
            className="form-control"
            onChange={this.handleChange}
            value={this.state.comment}
            rows="5"
          />
          <div style={{ marginTop: "10px" }}>
            <button className="btn btn-lg btn-success">Submit Comment</button>
          </div>
        </form>
        <div style={{ marginTop: "10px" }}>
          <button
            id="fetch-comments"
            className="btn btn-lg btn-success"
            onClick={this.props.fetchComments}
          >
            Fetch Comments
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));