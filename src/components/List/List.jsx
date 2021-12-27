import React, { useState } from "react";
import "./List.css";
import { ListItem } from "../ListItem/ListItem";

export function List({ todos, removeTask, marktodoDone }) {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <ListItem
            key={index}
            data={todo}
            removeTask={removeTask}
            marktodoDone={marktodoDone}
          />
        );
      })}
    </>
  );
}

/* export class List extends React.Component {
  render() {
    const todos = this.props.todos;
    return (
      <>
        {todos.map((todo) => {
          return <ListItem data={todo} />;
        })}
        <div className="form">
          <input type="text" />
          <button>Add</button>
        </div>
      </>
    );
  }
} */
