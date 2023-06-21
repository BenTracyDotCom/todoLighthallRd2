

export default function Todo({ todo }) {
  return (
    <div>
      <div>Task: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <div>Task status: {todo.status}</div>
      <div>Due: {todo.due}</div>
    </div>
  )
}