import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICommandsSlice {
    input: string
    commands: Array<string>
}

const initialState: ICommandsSlice = {
    input: '',
    commands: [

    ]
}

const commandsSlice = createSlice({
    name: "commands",
    initialState,
    reducers: {
        enterCommand: (state, action: PayloadAction<string>) => {
            state.commands.push(action.payload)
        },
        updateInput: (state, action: PayloadAction<string>) => {
            state.input = action.payload
        }
    },
    selectors: {
        selectCommands: state => state.commands,
        selectInput: state => state.input,
    }
})

export const { enterCommand, updateInput, } = commandsSlice.actions;

export const { selectCommands, selectInput } = commandsSlice.selectors;

export default commandsSlice.reducer;