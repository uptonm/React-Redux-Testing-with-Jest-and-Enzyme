import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return (
        <li key={comment} className="list-group-item">
          {comment}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <h4 className="display-4">Comment List</h4>
        <ul className="list-group">{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
