import React from 'react'
import { todosSelector } from '../../store/reducers/todoSlice.js';
import { useSelector } from 'react-redux';


export default function Narbar() {

  const todos = useSelector(todosSelector);

  return (
    <div className='navbar'>
        <h1>My Redux App todos</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Total todos: {todos.length}</li>
        </ul>
    </div>
  )
}
