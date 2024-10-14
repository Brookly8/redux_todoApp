import React from 'react'
import ToDoCard from '../ToDoCard/ToDoCard';
import { useSelector } from 'react-redux';

export default function PendingTodos() {
    const todos = useSelector((state) => state.todoItems.todoItems);
    const pendingTodos = todos.filter(todo=> todo.completed === false);
    return (
        <div className="todos">
          {pendingTodos.map((todo) => {
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
