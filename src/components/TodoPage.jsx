import Header from './Header';
import TodoList from './TodoList';

export default function TodoPage({user, setUser, todos, setTodos}) {

  return(
    <div>
      <Header user={user} setUser={setUser}/>
      <TodoList user={user} todos={todos} setTodos={setTodos}/>
    </div>
  )
}