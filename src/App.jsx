import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  

  return (
    <>
    <Login />
    <Header />
    <TodoList />
    </>
  )
}

export default App
