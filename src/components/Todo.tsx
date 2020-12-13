import React from 'react'

const Todo = ({ onClick, completed, text }: any) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)

export default Todo
