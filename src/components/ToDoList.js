import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center mb-3">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              handleEdit={() => {
                handleEdit(item.id);
              }}
            />
          );
        })}
        {/* <TodoItem /> */}
        <button
          className="btn btn-danger btn-block text-capitalize"
          type="button"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
