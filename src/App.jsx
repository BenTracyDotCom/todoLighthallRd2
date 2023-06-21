import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';

function App() {
  

  return (
    <>
    <AddTodoModal />
    <Login />
    <Header />
    <TodoList />
    </>
  )
}

export default App
