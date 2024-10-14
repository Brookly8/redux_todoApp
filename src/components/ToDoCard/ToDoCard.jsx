import React from "react";
import "./ToDoCard.css";
import { removeToDo, changeStatus} from "../../redux/Slices/todoItemsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ToDoCard({ todo, completed, userId, id }) {
  const todos = useSelector((state) => state.todoItems.todoItems);
  const dispatch = useDispatch();

  const onClickHendler = () => {
    dispatch(removeToDo(id));
  };
  const some = () => {
    dispatch(changeStatus(id));
  };
  return (
    <div className="todoCard">
      <div>
        <p>{todo}</p>
        <input type="checkbox" onChange={() => some()} checked={completed}></input>
        <p>{userId}</p>
      </div>
      <div className="deleteBtn">
        <button onClick={onClickHendler}>Delete</button>
      </div>
    </div>
  );
}
