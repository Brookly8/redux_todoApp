import React, { useState } from "react";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { isLogedIn } from "../../redux/Slices/isLogedInSlice";
import { registeredUsers } from "../../assets/users";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [submittedData, setSubmittedData] = useState({});
  const dispatch = useDispatch();

  const userLogedIn = useSelector((state) => state.isLogedIn);

  const onChangeHendler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const onClickHendler = (e) => {
    e.preventDefault();
    setSubmittedData(user);
    registeredUsers.forEach((registeredUsers) => {
      if (
        registeredUsers.userName === user.userName &&
        registeredUsers.password === user.password
      ) {
        dispatch(isLogedIn());
        navigate("/redux_todoApp");
      } else {
      }
    });
  };
  console.log(userLogedIn);
  return (
    <div className="loginMainDiv">
      <form onSubmit={(e) => onClickHendler(e)} className="loginDiv" action="">
        <h1>Login</h1>
        <input
          name="userName"
          onChange={(e) => onChangeHendler(e)}
          type="text"
          placeholder="Username"
        />
        <input
          name="password"
          onChange={(e) => onChangeHendler(e)}
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
