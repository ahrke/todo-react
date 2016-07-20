var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
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
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
