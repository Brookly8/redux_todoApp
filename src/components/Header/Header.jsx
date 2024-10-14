import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { isLogedIn } from "../../redux/Slices/isLogedInSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(isLogedIn());
    navigate("/redux_todoApp/login");
  };
  return (
    <header>
      <ul>
        <div className="divLeft">
          <NavLink to="/redux_todoApp/todoList">All ToDos</NavLink>
          <NavLink to="/redux_todoApp/completedTodos">Compleated ToDos</NavLink>
          <NavLink to="/redux_todoApp/pendingTodos">Pending ToDos</NavLink>
        </div>
        <div className="divRight">
          <NavLink onClick={onClick} to="/redux_todoApp/login">
            Log out
          </NavLink>
        </div>
      </ul>
    </header>
  );
}
