import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import paperTodo from '../assets/papertodo.jpeg';

export default function Login({ user, setUser }) {

  const [entry, setEntry] = useState('')

  const handleUser = (e) => {
    setEntry(e.target.value)
  }

  const enterPressed = (e) => {
    let code = e.keyCode || e.which;
    if(code === 13){
      setUser(entry)
      setEntry('')
      console.log('entered')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entry)
  }

  return (
    <div className="bg-login bg-cover h-screen flex items-center">
      <div className="card w-7/12 h-4/6 glass m-auto shadow-xl">
        <figure className="w-full mt-0 h-2/6"><img src={paperTodo} alt="todo notebook" className="w-full mt-0" /></figure>
        <div className="card-body">
          <h2 className="card-title m-auto -mt-3 text-5xl">Welcome!</h2>
          <p className="m-auto pt-6 text-3xl">Please enter your name to continue:</p>
          <div className="flex flex-row space-x-5">
            <div className="card bg-base-100 shadow-xl m-auto w-11/12">
              <div className="card-body">
                <input type="text" className="input input-ghost text-4xl text-center h-full input-2xl" id="input" onChange={handleUser} onKeyDown={enterPressed} value={entry}/>
              </div>
            </div>
            <div className="card bg-green-400 flex flex-row items-center justify-center w-2/12">
              <div className="card-body items-center text-5xl" id="submit" onClick={handleSubmit}>✔️</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}