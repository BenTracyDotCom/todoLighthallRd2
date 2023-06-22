import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import TodoPage from './components/TodoPage';

function App() {

  const [todos, setTodos] = useState([])
  const [user, setUser] = useState('Brengeley')

  return (

    <div>
      <AddTodoModal user={user} setTodos={setTodos} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<TodoPage todos={todos} setTodos={setTodos} user={user} setUser={setUser} />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
