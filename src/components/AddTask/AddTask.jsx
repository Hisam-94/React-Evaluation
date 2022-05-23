import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [values,setValues] = useState("");
  const [Todos,setTodos] = useState([]);
  const handleChange = (e)=>{

    // console.log(e.target.value)
    setValues(e.target.value)
  }

  const funct = ()=>{

    setTodos([...Todos,{value:values,id:Date.now()}])
    Todos.map((todo)=>{
      console.log(todo.value)
     return <div>todo.value</div>
  })

    
  }

 
  return (
    <div className={styles.todoForm}>
      <input value={values} onChange={handleChange} data-cy="add-task-input" type="text" />
      <button value={values} onClick={funct} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
