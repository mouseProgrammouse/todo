import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils,  { act } from 'react-dom/test-utils';
import TasksList from './TasksList';

describe("TasksList", function() {

  let container;
  const data = {
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it ("TasksList renders without crashing",() => {
    //prepare a component for assertions. This makes your test run closer to how React works in the browser.
    act(() => {
      ReactDOM.render(<TasksList />, container);
    });
  });

  it ("Add a new Task", () => {

  });

  it ("Edit a Task", () => {

  });

  it ("Delete a Task", () => {

  });

  it ("Check state change of task", () => {

  });
});
