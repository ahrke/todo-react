var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddToDo = require('AddToDo');

describe('AppToDo', () =>{
  it('should exist', () =>{
    expect(AddToDo).toExist();
  });

  it('should call onAddToDo after form entry', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDo.value = 'test';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should not call onAddToDo when invalid input', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
