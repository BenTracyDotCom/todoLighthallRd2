import axios from 'axios';
import { useState, useEffect } from 'react';
import DatePicker from 'react-tailwindcss-datepicker';

export default function AddTodoModal({ user, setTodos }) {

  const [form, setForm] = useState({
    user: user,
    title: 'Do the dumb things I gotta do',
    description: 'Touch the puppet head',
    status: 'Low priority',
    //will be {startDate: '2023-06-07' ...}
    due: { startDate: null, endDate: null }
  })

  //TODO: prevent invalid submissions
  const [fix, setFix] = useState({})

  const handleTitle = (e) => {
    setForm({ ...form, title: e.target.value })
    setFix({ ...fix, title: false })
  }

  const handleDescription = (e) => {
    setForm({ ...form, description: e.target.value })
    setFix({ ...fix, description: false })
  }

  const handleStatus = (e) => {
    setForm({ ...form, status: e.target.value })
    setFix({ ...fix, status: false })
  }

  const handleDue = (date) => {
    setForm({ ...form, due: date })
    setFix({ ...fix, due: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const toFix = {}
    Object.keys(form).forEach(key => {
      if (form[key]) {
        toFix[key] = false
      }
    })
    setFix(toFix)
    console.log(Object.keys(toFix).filter(key => (toFix[key])))
    if (!Object.keys(toFix).filter(key =>(toFix[key])).length) {
      console.log(Object.keys(toFix))
      const betterDue = new Date(form.due.startDate + 'T00:00:00').toISOString().slice(0, 19).replace('T', ' ');
      let options = {
        url: '/api/todos',
        data: { ...form, user: user, due: betterDue },
        method: 'POST'
      }
      axios(options)
        .then(res => {
          console.log(res.data)
          setTodos(res.data)
          window.add_todo_modal.close()
        })
        .catch(console.log)
    }
  }







  return (
    <div>
      <dialog id="add_todo_modal" className="modal">
        <form method="dialog" className="modal-box h-max flex flex-col bg-slate-400">
          <h3 className="font-bold text-lg">Add Task:</h3>
          <div>
            <input type="text" placeholder="Title" onChange={handleTitle} className={`input input-bordered w-full my-5 ${fix.title ? 'border-error' : ''}`} />
            <textarea className={`textarea textarea-bordered w-full mb-5 ${fix.description ? 'border-error' : ''}`} placeholder="Description" onChange={handleDescription}></textarea>
            <select className={`select select-bordered w-full ${fix.status ? 'border-error' : ''}`} onChange={handleStatus}>
              <option disabled selected>Status</option>
              <option>High priority</option>
              <option>Low priority</option>
              <option>In progress</option>
            </select>
          </div>
          <div className="my-3">
            Due:
            <DatePicker value={form.due} onChange={handleDue} asSingle={true} useRange={false} inputClassName={`input input-bordered w-full ${fix.due ? 'border-error' : ''}`} />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}