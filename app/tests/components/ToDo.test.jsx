var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var ToDo = require('ToDo');

describe('ToDo', () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 199,
      text: 'write todo',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);    
  });
});
