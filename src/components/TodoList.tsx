import React from 'react'
import Todo from './Todo'

interface todosDate {
  id: number
  text: string
  completed: boolean
}
interface paramDate {
  todos: todosDate[]
  toggleTodo: Function
}

const TodoList = ({ todos, toggleTodo }: paramDate) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
