import React, {useState} from "react";
//update form to be a controlled component so all inputs in state

function NewTaskForm({categories, onTaskFormSubmit}) {
  let [text, setText] = useState("")
  let [category, setCategory] = useState("Code")

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("")
    setCategory("Code")
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">  
      <label>
        Details
        <input onChange={(e) => setText(e.target.value)} name="text" type="text" />
      </label>
      <label>
        Category
        <select onChange={(e) => setCategory(e.target.value)} name="category">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
