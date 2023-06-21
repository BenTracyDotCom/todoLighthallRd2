import { useState } from 'react';
import axios from 'axios';

export default function Todo({ todo, setTodos }) {

  const [freshTodo, setTodo] = useState(todo)

  const handleEdit = () => {
    //TODO
  }
  const handleDelete = () => {
    //TODO
  }

  return (
    <div>
      <div>{todo.name}</div>
      <div>Task: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <div>Task status: {todo.status}</div>
      <div>Due: {todo.due}</div>
      <div className="btn" onClick={handleEdit}>edit</div>
      <div className="btn" onClick={handleDelete}>delete</div>
    </div>
  )
}