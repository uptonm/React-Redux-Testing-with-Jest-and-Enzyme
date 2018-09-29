import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() // Keeps page from attempting to reload on submit

        // TODO: Call an action creator and save the comment
        this.props.saveComment(this.state.comment)

        this.setState({ comment: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4 className='display-4 text-center'>Add a Comment</h4>
                <textarea className='form-control' onChange={this.handleChange} value={this.state.comment}></textarea>
                <div className='container' style={{marginTop: '10px'}}>
                    <button className='btn btn-lg btn-success'>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox)