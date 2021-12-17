import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

// export const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

// export const TASKS = [
//   {
//     text: "Buy rice",
//     category: "Food",
//   },
//   {
//     text: "Save a tenner",
//     category: "Money",
//   },
//   {
//     text: "Build a todo app",
//     category: "Code",
//   },
//   {
//     text: "Build todo API",
//     category: "Code",
//   },
//   {
//     text: "Get an ISA",
//     category: "Money",
//   },
//   {
//     text: "Cook rice",
//     category: "Food",
//   },
//   {
//     text: "Tidy house",
//     category: "Misc",
//   },
// ];

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [allTasks, setAllTasks] = useState(TASKS)

  // function handleCategoryClick (event) {
  //   event.target.className = "selected"
  //   setCategory(event.target.innerText)
  // }

  function handleItemFormSubmit (newItem) {
    setAllTasks([...allTasks, newItem])
  }

  const filteredTasks = allTasks.filter(task => {
    if (category === "All") {
      return true
    } 
    else if (task.category === category) {
      return true
    }
    return false
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleItemFormSubmit}/>
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
