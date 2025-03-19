import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICommandsState {
    input: string
    commands: Array<string>
}

const initialState: ICommandsState = {
    input: '',
    commands: [

    ]
}

const commandsSlice = createSlice({
    name: "commands",
    initialState,
    reducers: {
        enterCommand: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case 'cls':
                case 'clear':
                    state.commands = []
                    break
                case '':
                    state.commands.push('{ Empty }')
                    break
                default:
                    state.commands.push(action.payload)
            }
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