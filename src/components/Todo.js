import React, { Component } from "react";
import TodoForm from "./TodoForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: Boolean(),
      formStyle: { display: "none" },
      bodyStyle: {}
    };
  }
  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };

  toggleBodyForm = () => {
    this.state.formStyle.display === "block"
      ? this.setState({
          formStyle: { display: "none" },
          bodyStyle: { display: "block" }
        })
      : this.setState({
          formStyle: { display: "block" },
          bodyStyle: { display: "none" }
        });
  };

  componentDidMount() {
    this.setState({
      completed: this.props.todo.completed
    });
  }

  render() {
    return (
      <li data-todos-index={this.props.todo.id}>
        <div style={this.state.bodyStyle}>
          <span>{this.props.todo.body}</span>
          <a className="remove" onClick={this.deleteClickedTodo}>
            Remove
          </a>
          <a className="update" onClick={this.toggleBodyForm}>
            Edit
          </a>
        </div>
        <TodoForm
          todo={this.props.todo}
          style={this.state.formStyle}
          autoFocus={true}
          buttonName="Update Todo!"
          updateTodo={this.props.updateTodo}
          toggleBodyForm={this.toggleBodyForm}
        />
      </li>
    );
  }
}

export default Todo;
