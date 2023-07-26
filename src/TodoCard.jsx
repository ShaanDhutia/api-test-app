import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  let Navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "150px"
      }}
      onClick={() => Navigate.push(`/todo/${id}`)}
    >
      <h4> {title} </h4>
      <h6> {`Completed: ${completed}`} </h6>
    </div>
  );
};

export default TodoCard;
