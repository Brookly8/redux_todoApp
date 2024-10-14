import React, { useState } from "react";
import "./CreateToDo.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../redux/Slices/todoItemsSlice";

export default function CreateToDo() {
  const [inputData, setInputData] = useState("");
  const dispath = useDispatch();

  const onClickHendler = (e) => {
    e.preventDefault();
    dispath(addToDo(inputData));
  };
  const onChangeHandler = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div className="createTodoDiv">
      <form action="" onSubmit={(e) => onClickHendler(e)}>
        <button type="submit" className="createTodo">
          Create
        </button>
        <input
          onChange={(e) => onChangeHandler(e)}
          className="inputAddTodo"
          type="text"
        />
      </form>
    </div>
  );
}
