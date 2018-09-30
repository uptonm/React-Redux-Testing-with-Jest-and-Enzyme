import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'
import 'components/App.css'

class App extends Component {
    renderButton() {
        if(this.props.auth) {
            return (
                <a onClick={() => this.props.changeAuth(false)}>
                Sign Out
                </a>
            )
        }
        else {
            return (
                <a onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </a>
            )
        }
    }

    renderHeader() {
        return (
            <ul className='nav nav-pills nav-fill' style={{marginTop: '10px'}}>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/post'>Posts</Link>
                </li>
                <li className='nav-item right'>
                    <Link className='nav-link' to='/'>{this.renderButton()}</Link>
                </li>
            </ul>
        )
    }
    render() {
        return(
            <div className='container text-center'>
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route exact path='/' component={CommentList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps, actions)(App)