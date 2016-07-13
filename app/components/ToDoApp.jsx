var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddToDo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch} />
        <ToDoList todos={todos} />
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
