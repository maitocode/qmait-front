import { createSlice, nanoid } from "@reduxjs/toolkit"
import axios from 'axios';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.allTodos.unshift(action.payload);
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        },
        setCompleted: (state, action) => {
            state.allTodos.map(todo => {
                if (todo.id === action.payload)
                    todo.completed = !todo.completed;
                return todo;
            });
        },
        deleteTodo: (state, action) => {
            state.allTodos.filter(todo => todo.id !== action.payload)
        },
        todosFetched: (state, action) => {
            state.allTodos = action.payload;
        }
    }
})

// Async action creator, action and reducer dispatch
export const getTodos = () => {
    const getTodosAsync = async dispatch => {
        try {
            const rsp = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            dispatch(todosFetched(rsp.data))
        } catch (error) {
            console.log(error);
        }
    }

    return getTodosAsync;
}
// Reducer
const todosReducer = todosSlice.reducer

// selector
export const todosSelector = state => state.todosReducer.allTodos

// action
export const { addTodo, setCompleted, deleteTodo, getAllTodos, todosFetched } = todosSlice.actions;

export default todosReducer;