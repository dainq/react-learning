import React from "react";
import classes from "./Post.module.css";
import { useState } from "react";

export default function Post() {
  let [input, setInput] = useState("");
  let [todoList, setTodo] = useState([]);

  function getInput(event) {
    const UserInput = event.target.value
    setInput(UserInput);
  };
  function addTodo() {
    if (input.trim()) {
      setTodo([...todoList, input]);
      setInput("")
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };
  function deleteTodo(index) {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  function listAppend(tasklist) {
    return todoList.map((task, index) => (<li className={classes.todo_list} >
      <span className={classes.task}>
      {task}
      </span>
      <button onClick={() => deleteTodo(index)} >Delete</button>
    </li>));
  }

  return (
    <div>
      <button className={classes.post} onClick={addTodo}>
        AddTodo
      </button>
      <input type="text" value={input} onKeyDown={handleKeyDown} onChange={getInput} />
      <ul>{listAppend(todoList)}</ul>
    </div>
  );
}
