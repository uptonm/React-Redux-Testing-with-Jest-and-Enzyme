import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios' // Tricks axios into thinking it makes a real HTTP request in the JSDOM CLE
import Root from 'root'
import App from 'components/App'

beforeEach(() => {
    moxios.install() // Initialize moxios
    // Intercept requests from this url and do this function when you do
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' }
        ]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    // Find the fetch comments button and click it
    wrapped.find('#fetch-comments').simulate('click')
    
    moxios.wait(() => { // Delay until moxios intercepts the request and sends a response
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        // Expect to find a list of comments... i.e. 2 'li' elements from moxios
        done()
        wrapped.unmount()
    })
})