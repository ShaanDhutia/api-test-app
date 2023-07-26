import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./todos";
import Todo from "./Todo";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route exact path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
