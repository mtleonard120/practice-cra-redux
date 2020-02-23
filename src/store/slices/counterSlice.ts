import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IStore} from 'store/store'

// types
export interface ICounterState {
    value: number
}

const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to 'mutate' the state. It doesn't actually
            // mutate the state because it uses the immer library, which detects
            // changes to a "draft state" and produces a brand new immutable state
            // based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<{amount: number}>) => {
            state.value += action.payload.amount
        },
    },
})

// selectors
export const selectCount = (state: IStore) => state.counter.value

// action creators
export const {increment, decrement, incrementByAmount} = slice.actions

// reducer
export const counterReducer = slice.reducer
