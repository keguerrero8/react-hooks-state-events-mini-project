import React from "react";
import Task from "./Task";

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

function TaskList( { tasks } ) {
  return (
    <div className="tasks">
      {tasks.map(task => <Task key={task.text} text={task.text} category={task.category}/>)}
      {/* display a list of tasks using Task component */}
    </div>
  );
}


export default TaskList;
