import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos.jsx";
import PendingTodos from "./components/PendingTodos/PendingTodos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todoList",
        element: <ToDoList />,
      },
      {
        path: "completedTodos",
        element: <CompletedTodos />,
      },
      {
        path: "pendingTodos",
        element: <PendingTodos />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

// npm install @reduxjs/toolkit react-redux
