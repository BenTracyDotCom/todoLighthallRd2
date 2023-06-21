import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AddTodoModal() {

  const [form, setForm] = useState({
    title: '',
    description: '',
    status: '',
    due: ''
  })

  const [valid, setValid] = useState(false)

  const handleTitle = (e) => {
    setForm(...form, title = e.target.value)
  }

  const handleDescription = (e) => {
    setForm(...form, description = e.target.value)
  }

  const handleStatus = (e) => {
    setForm(...form, status = e.target.value)
  }

  const handleDue = (e) => {
    setForm(...form, due = e.target.value)
  }

  const handleSubmit = (e) => {
    api.test()
  }



  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <button className="btn">Submit</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}