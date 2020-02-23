import {combineReducers, configureStore} from '@reduxjs/toolkit'

import {counterReducer} from 'store'

// define root reducer explicity to extract its type below
const rootReducer = combineReducers({
    counter: counterReducer,
})

export type IStore = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})
