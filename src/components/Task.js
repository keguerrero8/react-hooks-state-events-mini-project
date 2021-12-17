import React, { useState } from "react";

function Task({text, category}) {
  const [ isRemoved, setRemovedTask] = useState(false)
  function handleRemovedTask () {
    console.log(isRemoved)
    setRemovedTask(!isRemoved)
  }

  if (isRemoved) {
    return (
    <div className="task">
    </div>
    )
  } else {
    return (    
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleRemovedTask}>X</button>
      </div>
    );
  }
}

export default Task;
