import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo/CreateToDo";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchData } from "./redux/Slices/todoItemsSlice";
import LoginPage from "./components/LoginPage/LoginPage";
import { useNavigate } from "react-router-dom";

function App() {
  const userLogedIn = useSelector((state) => state.isLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/redux_todoApp/login");
  };

  if (userLogedIn === false) {
    goToLogin();
  }

  return (
    <>
      <div className="main">
        <Header />
        <CreateToDo />
        <Outlet />
      </div>
    </>
  );
}

export default App;
