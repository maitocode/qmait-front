import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../..//store/reducers/todoSlice.js';
import TodoForm from './../todoForm/TodoForm';
import { setCompleted } from '../..//store/reducers/todoSlice.js';
import { useEffect } from 'react';
import { getTodos } from './../../store/reducers/todoSlice';

export default function Todos() {

  const dispatch = useDispatch();

  const toggleTodoCompleted = (todoId) => {
      console.log(todoId);
      dispatch(setCompleted(todoId));
  }
    const todos = useSelector(todosSelector);
  
    useEffect(() => {
      dispatch(getTodos())
    }, [])

  return (
    <div className='todo-list'>
      <TodoForm />
        <ul>
            {todos.map(todo => (<li key={todo.id}>
              {todo.title}
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoCompleted(todo.id)}/>
              </li>))}
        </ul>
    </div>
  )
}
