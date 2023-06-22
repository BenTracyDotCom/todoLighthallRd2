import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import TodoPage from './components/TodoPage';
import Protected from './components/Protected';

function App() {

  const [todos, setTodos] = useState([])
  const [user, setUser] = useState('Brengeley')
  const [loggedIn, setLoggedIn] = useState(null);

  return (

    <div>
      <AddTodoModal user={user} setTodos={setTodos} />
      <Router>
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} setLoggedIn={setLoggedIn} />} />
          <Route path="/tasks" element={
            <Protected isLoggedIn={loggedIn}>
              <TodoPage todos={todos} setTodos={setTodos} user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
            </Protected>
          } />
        </Routes>
      </Router>
    </div>

  )
}

export default App
