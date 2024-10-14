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
    navigate("/login");
  };
  return (
    <header>
      <ul>
        <div className="divLeft">
          <NavLink to="/todoList">All ToDos</NavLink>
          <NavLink to="/completedTodos">Compleated ToDos</NavLink>
          <NavLink to="/pendingTodos">Pending ToDos</NavLink>
        </div>
        <div className="divRight">
          <NavLink onClick={onClick} to="/login">
            Log out
          </NavLink>
        </div>
      </ul>
    </header>
  );
}
