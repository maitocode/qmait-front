import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import axios from 'axios';


// new Redux action creator by Thunk
export const getTodos = createAsyncThunk('tos/fetch', async () => {
    const rsp = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    return rsp.data;
})

export const addTodo = createAsyncThunk('todo/addTodo', async title => {
    const newTodo = {
        id: nanoid(),
        title,
        completed: false
    }
    await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    return newTodo;
})

export const deleteTodo = createAsyncThunk('todo/todoDeleted', async todoId => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos${todoId}`);
    return todoId;
})

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: []
    },
    reducers: {
        setCompleted: (state, action) => {
            state.allTodos.map(todo => {
                if (todo.id === action.payload)
                    todo.completed = !todo.completed;
                return todo;
            });
        },
        todosFetched: (state, action) => {
            state.allTodos = action.payload;
        }
    },
    extraReducers: {
        // get all todo
        [getTodos.pending]: (state, action) => {
            console.log("fetching....");
        },
        [getTodos.fulfilled]: (state, action) => {
            console.log("done");
            state.allTodos = action.payload;
        },
        [getTodos.rejected]: (state, action) => {
            console.log("reject !!!");
        },

        // add todo
        [addTodo.fulfilled]: (state, action) => {
            state.allTodos.unshift(action.payload);
        },

        // delete todo
        [deleteTodo.fulfilled]: (state, action) => {
            state.allTodos.filter(todo => todo.id !== action.payload);
        },
    }
})

// Old
// Async action creator, action and reducer dispatch
// export const getTodos = () => async dispatch => {
//     try {
//         const rsp = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
//         dispatch(todosFetched(rsp.data))
//     } catch (error) {
//         console.log(error);
//     }
// }


// Reducer
const todosReducer = todosSlice.reducer

// selector
export const todosSelector = state => state.todosReducer.allTodos

// action
export const { setCompleted } = todosSlice.actions;

export default todosReducer;