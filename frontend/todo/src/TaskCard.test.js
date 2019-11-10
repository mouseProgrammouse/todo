import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils,  { act } from 'react-dom/test-utils';
import TaskCard from './TaskCard';

describe("TaskCard", function() {

  let container;
  const data = {
    title: 'TODO list',
    description: 'Add documentation for each http-method. And please dont forget about status code'
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it ("TaskCard renders without crashing",() => {
    //prepare a component for assertions. This makes your test run closer to how React works in the browser.
    act(() => {
      ReactDOM.render(<TaskCard title={data.title} description={data.description}/>, container);
    });
  });

  it ("TaskCard renders correct data", () => {
    act(() => {
      ReactDOM.render(<TaskCard title={data.title} description={data.description}/>, container);
    });

    //check title
    const title = container.querySelector('h3');
    expect(title.textContent).toBe(data.title);

    //check description
    const description = container.querySelector('p');
    expect(description.textContent).toBe(data.description);
  });
});
