import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import notebook from '../assets/notebook.png'

//sample list for testing
const todos = ['do the dumb things I gotta do', 'touch the puppet head']


export default function TodoList({ user, todos, setTodos }) {

  const [inWork, setInWork] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [complete, setComplete] = useState([])
  const [showComplete, setShowComplete] = useState(false)

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
    <div className="h-screen bg-login bg-cover overflow-y-hidden font-architect">
      <img src={notebook} className="fixed w-full h-[93%] mt-20 ml-1" />
      <div className="mx-5">
        <div className="relative mt-40 w-11/12 m-auto grid grid-cols-2 gap-x-28">
          <div className="">
            <div className="">
              <div className="text-l w-min">Sort:</div>
              <div className="text-l w-min">Filter:</div>
            </div>
            <div className="font-architect text-3xl mb-4 -mt-20 w-min mx-auto">Backlog</div>
            <div className="h-[70vh] overflow-y-auto">
              <div className="">
                {!!backlog.length && backlog.map(todo => (
                  <Todo todo={todo} setTodos={setTodos} key={'todo' + todo.id.toString()} />
                ))}
                {!backlog.length &&
                  <div>
                    Start adding tasks by clicking the button below!
                  </div>}
                <div className="flex justify-center">
                  <div className="btn btn-ghost font-architect text-2xl cursor-pointer mt-5" onClick={() => window.add_todo_modal.showModal()}>Add Task</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-architect text-3xl mb-4 -mt-8 flex justify-center">In Progress</div>
            <div className="h-[70vh] -mt-5 overflow-y-auto">
              {!!inWork.length && inWork.map(todo => (
                <Todo todo={todo} setTodos={setTodos} key={'todo' + todo.id.toString()} />
              ))}
              <button className="btn float-right mr-5" onClick={() => { setShowComplete(!showComplete) }}>Show Complete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}