import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

/* SETUP */
let wrapped // Render a fake component (without children) for testing
beforeEach(() => {
  wrapped = shallow(<App />)
})

// Check if it contains a comment box
it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

// Check if it contains a comment list
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})

