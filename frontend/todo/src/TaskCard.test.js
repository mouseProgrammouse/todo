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

  it ("TaskCard renders correct title and description", () => {
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

  it ("TaskCard renders correct buttons", () => {
    act(() => {
      ReactDOM.render(<TaskCard title={data.title} description={data.description}/>, container);
    });

    //check edit button
    const editButton = container.querySelector('.edit');
    expect(editButton).not.toBe(null);
    expect(editButton.tagName).toBe('BUTTON');

    //check delete button
    const deleteButton = container.querySelector('.delete');
    expect(deleteButton).not.toBe(null);
    expect(deleteButton.tagName).toBe('BUTTON');

    //check done button
    const doneButton = container.querySelector('.done');
    expect(doneButton).not.toBe(null);
    expect(doneButton.tagName).toBe('BUTTON');
  });

  it ("TaskCard renders correct icons for buttons", () => {
    act(() => {
      ReactDOM.render(<TaskCard title={data.title} description={data.description}/>, container);
    });

    //check icon for edit button
    const editButton = container.querySelector('.edit');
    let svgIcon = editButton.querySelector('svg');
    expect(svgIcon).not.toBe(null);
    expect(svgIcon.getAttribute('data-icon')).toBe('edit');

    //check icon for delete button
    const deleteButton = container.querySelector('.delete');
    svgIcon = deleteButton.querySelector('svg');
    expect(svgIcon).not.toBe(null);
    expect(svgIcon.getAttribute('data-icon')).toBe('trash');

    //check icon for done button
    const doneButton = container.querySelector('.done');
    svgIcon = doneButton.querySelector('svg');
    expect(svgIcon).not.toBe(null);
    expect(svgIcon.getAttribute('data-icon')).toBe('check');
  });
});
