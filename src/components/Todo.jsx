import { useState } from 'react';
import axios from 'axios';

export default function Todo({ todo, setTodos }) {

  const [freshTodo, setTodo] = useState(todo)

  const handleEdit = () => {
    //TODO
  }

  const handleComplete = () => {

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
    <div className="flex flex-col w-full">
      <div className="divider"></div>
      <div className="relative flex flex-row justify-between font-architect mr-5">
        <div className="flex flex-col justify-start">
          <div className="text-2xl font-bold">{todo.title}</div>
          <div>{todo.description}</div>
        </div>
        <div className="flex flex-col">
          <div>Due: {new Date(todo.due).toDateString()}</div>
          <div className="hover:text-blue-500 cursor-pointer">{todo.status}</div>
        <div className="flex flex-row justify-between">
          <div className="hover:text-green-500 cursor-pointer" onClick={handleComplete}>complete</div>
          <div className="hover:text-green-500 cursor-pointer" onClick={handleEdit}>edit</div>
          <div className="hover:text-error cursor-pointer" onClick={handleDelete}>delete</div>
        </div>
        </div>
      </div>
    </div>
  )
}