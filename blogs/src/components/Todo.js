import { useState } from "react";

const todoList = ["Product", "User", "Posts"];

const Todo = () => {
  const [todo, setTodo] = useState(todoList);

  const handleComplete= (todo)=> {

  };
  const handleDelete= ()=> {

  };
  const handleDeleteAll= () => {
    setTodo([]);
  }
  return todoList.map((todo) => {
    <div>
      <span>{todo}</span>
      <button onClick= {()=>handleComplete(todo)}>complete</button>
      <button onClick= {()=>handleDelete(todo)}>delete</button>
    </div>;
    <div><button onClick={handleDeleteAll}>Delete all</button></div>
  });
};

export default Todo;
