import React from 'react'
import { useState } from 'react';
import { addTodo } from '../../store/reducers/todoSlice.js';
import { useDispatch } from 'react-redux';

export default function TodoForm() {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const changeTitle = event => {
        setTitle(event.target.value);
    }

    const addSingleTodo = event => {
        event.preventDefault();
        console.log(title);
        dispatch(addTodo(title));
        setTitle('')
    }

  return (
    <div>
        <form onSubmit={addSingleTodo}>
            <input type="text" value={title} onChange={changeTitle} />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}
