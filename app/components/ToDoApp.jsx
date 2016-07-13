var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id:1,
          text: 'walk the dog'
        },
        {
          id:2,
          text: 'clean the yard'
        },
        {
          id:3,
          text: 'plan thailand'
        },
        {
          id:4,
          text: 'become master calisthenics!'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos} />
      </div>
    );
  }
});

module.exports = ToDoApp;
