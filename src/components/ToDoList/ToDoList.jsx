import React from "react";
import { useSelector } from "react-redux";
import ToDoCard from "../ToDoCard/ToDoCard";
import "./ToDoList.css";

export default function ToDoList() {
  const todos = useSelector((state) => state.todoItems.todoItems);
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <ToDoCard
            id={todo.id}
            key={todo.id}
            todo={todo.todo}
            completed={todo.completed}
            userId={todo.userId}
          />
        );
      })}
    </div>
  );
}
