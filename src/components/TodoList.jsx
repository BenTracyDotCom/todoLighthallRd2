import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

//sample list for testing
const todos = ['do the dumb things I gotta do', 'touch the puppet head']


export default function TodoList({ user, todos, setTodos }) {
  


  useEffect(() => {
    axios.get(`api/todos/${user}`)
    .then(res => {
      setTodos(res.data)
    })
    .catch(console.log)
  }, [])

  return (
    <div>
      <div>
        Todo List:
      </div>
      {!!todos.length && todos.map(todo => (
        <Todo todo={todo} />
      ))}
      <button className="btn" onClick={() => window.add_todo_modal.showModal()}>Add Task</button>
    </div>
  )
}