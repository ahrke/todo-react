var React = require('react');

var AddToDo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var toDo = this.refs.toDo.value;

    if(toDo.length > 0) {
      this.refs.toDo.value = '';
      this.props.onAddToDo(toDo);
    } else {
      this.refs.toDo.focus();
    };
  },
  render: function() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='toDo' />
          <button className='button primary expanded'>Add Task</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
