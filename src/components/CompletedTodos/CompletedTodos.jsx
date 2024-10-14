import React from "react";
import { useSelector } from "react-redux";
import ToDoCard from "../ToDoCard/ToDoCard";

export default function CompletedTodos() {
  const todos = useSelector((state) => state.todoItems.todoItems);
  const filteredData = todos.filter((todo) => todo.completed === true);
  return (
    <div className="todos">
      {filteredData.map((todo) => {
        return (
          <ToDoCard
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
