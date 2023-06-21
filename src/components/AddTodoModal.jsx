//TODO: add Title, Description, Status (completed, in progress, etc), and Due Date
import { useState } from 'react';

export default function AddTodoModal() {

  const [form, setForm] = useState({
    title: '',
    description: '',
    status: '',
    due: ''
  })

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

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}