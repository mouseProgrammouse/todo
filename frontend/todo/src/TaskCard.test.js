import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TaskCard from './TaskCard';

describe("TaskCard", function() {

  it ("can render without error", function() {
    let component, element;

    element = React.createElement(
      TaskCard
      //{} //props
      //add children as the last argument
    );

    // Render into a document fragment and return the full component instance.
    expect(function() {
      //
      component = ReactTestUtils.renderIntoDocument(element);
    }).not.toThrow();
  });
});
