import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
/* uses JSDOM to fool React into thinking it's rendering in the browser */
it('shows a comment box', () => {
  const div = document.createElement('div')
  // This 'fake' div will contain the HTML produced by the App component
  ReactDOM.render(<App />, div)
  expect(div.innerHTML).toContain('Comment Box')
  /* Responsible for cleanup. Destroys leftover objects to improve performance of test suite */
  ReactDOM.unmountComponentAtNode(div)
})
it('shows a comment list', () => {
    const div = document.createElement('div');
    // This 'fake' div will contain the HTML produced by the App component
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Comment List');
    /* Responsible for cleanup. Destroys leftover objects to improve performance of test suite */
    ReactDOM.unmountComponentAtNode(div);
  });