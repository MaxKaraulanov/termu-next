import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
    name: string
    id: string
}

const initialState: IUserState = {
    name: 'Max',
    id: '8523948u4bn50285'
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    },
    selectors: {
        selectUserName: state => state.name,
        selectUserId: state => state.id
    }
})

export const { changeUserName} = userSlice.actions;

export const { selectUserName, selectUserId} = userSlice.selectors;

export default userSlice.reducer