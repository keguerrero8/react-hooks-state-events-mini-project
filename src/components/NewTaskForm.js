import React, { useState } from "react";
// export const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
function NewTaskForm( { categories, onTaskFormSubmit }) {
  const [formInput, setFormInput] = useState("")
  const [formCategory, setFormCategory] = useState("Code")

  // const newItem = {
  //   text : formInput,
  //   category : formCategory
  // }

  function handleFormInput (event) {
    setFormInput(event.target.value)
  }

  function handleFormSelect (event) {
    setFormCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text : formInput,
      category : formCategory
    });
  }


  const options = categories.map(option => {
    if (option !== "All") {
      return <option key={option}>{option}</option>
    }
    return false
  })
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        {/* Need state here */}
        <input type="text" name="text" onChange={handleFormInput}/> 
      </label>
      <label>
        Category
        {/* Need state here */}
        <select name="category" onChange={handleFormSelect}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
