import Todo from './Todo';

//sample list for testing
const todos = ['do the dumb things I gotta do', 'touch the puppet head']

export default function TodoList() {

    return (
        <div>
            <div>
                Todo List:
            </div>
            {todos.map(todo => (
                <Todo todo={todo} />
            ))}
        </div>
    )
}