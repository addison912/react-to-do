import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  onChange = event => {
    this.setState({
      todo: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.toggleBodyForm();
    var todo = this.state.todo;
    this.props.updateTodo({ body: todo }, this.props.todo._id);
  };

  componentDidMount() {
    this.setState({
      todo: this.props.todo
    });
  }

  render() {
    return (
      <div style={this.props.style} className="todoForm">
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            placeholder="edit todo ..."
            type="text"
            value={this.state && this.state.todo.body}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
