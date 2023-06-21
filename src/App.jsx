import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';


function App() {
  
  const [user, setUser] = useState('Brengeley')

  return (
    <>
    <AddTodoModal user={user}/>
    <Login />
    <Header user={user}/>
    <TodoList user={user}/>
    </>
  )
}

export default App
