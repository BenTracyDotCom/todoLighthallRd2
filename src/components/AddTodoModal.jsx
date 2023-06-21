import axios from 'axios';
import { useState, useEffect } from 'react';
import DatePicker from 'react-tailwindcss-datepicker';

export default function AddTodoModal({ user }) {

  const [form, setForm] = useState({
    user: user,
    title: 'Do the dumb things I gotta do',
    description: 'Touch the puppet head',
    status: 'Low priority',
    //will be {startDate: '2023-06-07' ...}
    due: {startDate: new Date(), endDate: null}
  })

  const [valid, setValid] = useState(false)

  const handleTitle = (e) => {
    setForm({ ...form, title: e.target.value })
  }

  const handleDescription = (e) => {
    setForm({ ...form, description: e.target.value })
  }

  const handleStatus = (e) => {
    setForm({ ...form, status: e.target.value })
  }

  const handleDue = (date) => {
    setForm({ ...form, due: date })
  }

  const handleSubmit = (e) => {
    //TODO: ensure valid inputs before submitting to api
    e.preventDefault()
    const betterDue = new Date(form.due.startDate+'T00:00:00').toISOString().slice(0, 19).replace('T', ' ');
    let options = {
      url: '/api/todos',
      data: {...form, user: user, due: betterDue},
      method: 'POST'
    }
    axios(options).then(console.log)
  }



  return (
    <div>
      <dialog id="add_todo_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Add Task:</h3>
          <input type="text" placeholder="Title" onChange={handleTitle} className="input input-bordered w-full max-w-xs" />
          <textarea className="textarea textarea-bordered" placeholder="Description" onChange={handleDescription}></textarea>
          <select className="select select-bordered w-full max-w-xs" onChange={handleStatus}>
            <option disabled selected>Status</option>
            <option>High priority</option>
            <option>Low priority</option>
            <option>In progress</option>
          </select>
          <div>
            Due:
            <DatePicker value={form.due} onChange={handleDue} asSingle={true} useRange={false}/>
          </div>

          <button className="btn" onClick={handleSubmit}>Submit</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}