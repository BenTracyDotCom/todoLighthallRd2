import { useState } from 'react';
import axios from 'axios';

export default function Todo({ todo, setTodos }) {

  const [freshTodo, setTodo] = useState(todo)

  const handleEdit = () => {
    //TODO
  }
  const handleDelete = () => {
    const options = {
      url: '/api/todos/delete',
      method: 'PUT',
      data: freshTodo
    }
    axios(options)
      .then(res => {
        setTodos(res.data)
      })
      .catch(console.log)
  }

  return (
    <div className="relative flex flex-row border-2 font-architect">
      <div className="flex flex-col justify-start">
        <div className="text-xl">{todo.title}</div>
        <div>{todo.description}</div>
      </div>
      <div>Task status: {todo.status}</div>
      <div>Due: {todo.due}</div>
      <div className="">
        <div className="hover:text-green-500" onClick={handleEdit}>edit</div>
        <div className="hover:text-error" onClick={handleDelete}>delete</div>
      </div>
    </div>
  )
}