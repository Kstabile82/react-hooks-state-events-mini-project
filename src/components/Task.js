import React from "react";
//update Task so it shows task's text and category. Delete removes task

function Task({ text, category, onDeleteTask }) {

  function handleClick() {
    onDeleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
