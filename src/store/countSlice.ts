import {createSlice} from "@reduxjs/toolkit";

interface ICountState {
    count: number,
}

const initialState: ICountState = {
    count: 0,
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    },
    selectors: {
        selectCount: state => state.count,
    }
})

export const { increment, decrement } = countSlice.actions;

export const { selectCount } = countSlice.selectors;

export default countSlice.reducer;