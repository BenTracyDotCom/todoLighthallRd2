import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import notebook from '../assets/notebook.png'

//sample list for testing
const todos = ['do the dumb things I gotta do', 'touch the puppet head']


export default function TodoList({ user, todos, setTodos }) {

  const[inWork, setInWork] = useState([]);
  const[backlog, setBacklog] = useState([]);
  const[complete, setComplete] = useState([])
  const[showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    axios.get(`api/todos/${user}`)
      .then(res => {
        setInWork(todos.filter(todo => (todo.status === 'In progress')));
        setBacklog(todos.filter(todo => (todo.status !== 'In progress' && todo.status !== 'Complete')))
        setTodos(res.data)
      })
      .catch(console.log)
  }, [todos])

  return (
    <div className="h-screen bg-login bg-cover overflow-y-auto">
      <img src={notebook} className="fixed w-full h-11/12 mt-14" />
      <div className="relative  mt-40 w-11/12 m-auto grid grid-cols-2 gap-x-32">
        <div>
          <div className="font-architect text-3xl mb-4 -mt-8 flex justify-center">Backlog</div>
          {!!backlog.length && backlog.map(todo => (
            <Todo todo={todo} setTodos={setTodos} key={'todo' + todo.id.toString()} />
          ))}
          {!backlog.length &&
            <div>
              Start adding tasks by clicking the button below!
            </div>}
          <button className="btn" onClick={() => window.add_todo_modal.showModal()}>Add Task</button>
        </div>
        <div>
        <div className="font-architect text-3xl mb-4 -mt-8 flex justify-center">In Progress</div>
          {!!inWork.length && inWork.map(todo => (
            <Todo todo={todo} setTodos={setTodos} key={'todo' + todo.id.toString()} />
          ))}
        <button className="btn float-right mr-5" onClick={() => {setShowComplete(!showComplete)}}>Show Complete</button>
        </div>
      </div>
    </div>
  )
}