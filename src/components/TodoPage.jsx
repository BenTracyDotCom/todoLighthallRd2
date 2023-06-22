import Header from './Header';
import TodoList from './TodoList';

export default function TodoPage({user, setUser, todos, setTodos, setLoggedIn }) {

  return(
    <div>
      <Header user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
      <TodoList user={user} todos={todos} setTodos={setTodos}/>
    </div>
  )
}