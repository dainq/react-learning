import React from "react";
import classes from "./Post.module.css";
import { useState } from "react";
import db from "./firebasesdk"
import auth from "./firebasesdk"


async function getTodos() {
  const todosRef = db.collection('Todo');
  const snapshot = await todosRef.get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(todos)
  return todos;
}

// Get todos for the current user (assuming a 'uid' field in todos)
async function getUserTodos() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not logged in');
  }
  const todosRef = db.collection('todos').where('uid', '==', user.uid);
  const snapshot = await todosRef.get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return todos
}

function Post() {
  let [input, setInput] = useState("");
  let [todoList, setTodo] = useState([]);
  function getInput(event) {
    const UserInput = event.target.value
    setInput(UserInput);
  };
  function addTodo() {
    console.log(db)
    getTodos()
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
export default Post