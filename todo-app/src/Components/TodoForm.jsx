import { uniqueId } from "lodash";
import React, { useState, useEffect, useRef } from "react";
import styles from '../App.css';

function TodoForm(props) {
  const [todoItem, setTodoItem] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uniqueId(),
      text: todoItem,
    });

    setTodoItem("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
      <>
      <input
         type="text"
         placeholder="Update your item"
         value={todoItem}
         onChange={(e) => setTodoItem(e.target.value)}
         name="text"
         className="todo-input edit"
         ref={inputRef}
       />
       <button className="todo-button edit" onClick={handleSubmit}>
         Update
      </button>
      </>) : 
      (<> <input
         type="text"
         placeholder="Create a new task"
         value={todoItem}
         onChange={(e) => setTodoItem(e.target.value)}
         name="text"
         className="todo-input"
         ref={inputRef}
       />
       <button className="todo-button" onClick={handleSubmit}>
         Add
      </button> </>)
      }
      
       
    </form>
  );
}

export default TodoForm;