var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each todo item' , () => {
    var todos = [{
      id:1,
      text: 'do something'
    },
    {
      id:2,
      text: 'check mail'
    }];
    var todolist = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist,ToDo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
