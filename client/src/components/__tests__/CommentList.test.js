import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "root";

let wrapped;
let comments = ["comment1", "comment2"];

beforeEach(() => {
  const initialState = { comments };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("shows one 'li' element per comment", () => {
  expect(wrapped.find("li").length).toEqual(comments.length);
});

it("shows text from each comment in its own 'li' element", () => {
  comments.map(comment => {
    expect(wrapped.render().text()).toContain(comment);
  });
});
