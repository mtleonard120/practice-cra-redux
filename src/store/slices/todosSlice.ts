import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IStore} from 'store/store'

// types
export interface ITodo {
    id: string
    label: string
    isComplete: boolean
}

export type ITodosState = ITodo[]

const slice = createSlice({
    name: 'todos',
    initialState: [] as ITodosState,
    reducers: {
        addTodo: (state, action: PayloadAction<{label: string}>) => {
            const newTodo: ITodo = {
                id: Math.random()
                    .toString(36)
                    .substr(2, 9),
                label: action.payload.label,
                isComplete: false,
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<{id: string}>) => {
            const index = state.findIndex(t => t.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        toggleComplete: (state, action: PayloadAction<{id: string}>) => {
            const todo = state.find(t => t.id === action.payload.id)
            if (todo) {
                todo.isComplete = !todo.isComplete
            }
        },
    },
})

// selectors
export const todoList = (state: IStore) => state.todos

// action creators
export const {addTodo, deleteTodo, toggleComplete} = slice.actions

// reducer
export const todosReducer = slice.reducer
