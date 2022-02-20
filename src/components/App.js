import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [categoryList, setCategoryList] = useState("All")
  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }
  function handleDelete(deletedTask) {
    let tempList = taskList.filter(task => task.text !== deletedTask);
    setTaskList(tempList)
  }
  let shownTasks = taskList.filter(
    (task) => categoryList === "All" || task.category === categoryList
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onSelectCategory={setCategoryList} selectedCategory={categoryList} categories={CATEGORIES}/>
      <div>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={handleAddTask}/>
      <TaskList onDeleteTask={handleDelete} tasks={shownTasks} />
      </div>
    </div>
  );
}

export default App;
