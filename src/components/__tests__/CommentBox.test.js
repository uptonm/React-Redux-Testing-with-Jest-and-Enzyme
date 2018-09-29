import React from 'react'
import { mount } from 'enzyme'
import Root from 'root'
import CommentBox from 'components/CommentBox'

/* SETUP */
let wrapped
beforeEach(() => {
    // Uses Enzyme full DOM style render testing
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})
/* CLEANUP */
afterEach(() => {
    wrapped.unmount() // Unmount DOM render to avoid possible conflicts with JSDOM testing
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

describe('text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { // event.target.value = text area value
            target: { value: 'new comment' }
        })
        wrapped.update()
    })

    it('has a text area that a user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('clears textarea on submit', () => {
        wrapped.find('form').simulate('submit') // Submit form simulation
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('') // Confirm clear on submit
    })
})