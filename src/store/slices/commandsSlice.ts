import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommandsState {
    input: string;
    commands: Array<string>;
    userAgent?: string;
}

const initialState: ICommandsState = {
    input: '',
    commands: [],
    userAgent: undefined
};

const commandsSlice = createSlice({
    name: "commands",
    initialState,
    reducers: {
        enterCommand: (state, action: PayloadAction<string>) => {
            const input = action.payload.trim();

            switch (input) {
                case 'cls':
                case 'clear':
                    state.commands = [];
                    break;
                case 'flip':
                    const coin = Math.random() < 0.5 ? 'Орёл 🦅' : 'Решка 🎲';
                    state.commands.push(`Результат броска: ${coin}`);
                    break;
                case 'date':
                    state.commands.push(new Date().toString());
                    break;
                case 'os':
                case 'OS':
                    state.commands.push(`Your OS: ${state.userAgent || 'unknown'}`);
                    break;
                case 'version':
                    state.commands.push('Termu-Next Version 1.0.0 By Danil Skladan');
                    break;
                default:
                    state.commands.push('Available commands: cls, clear, date, flip, OS, version');
            }
        },
        updateInput: (state, action: PayloadAction<string>) => {
            state.input = action.payload;
        },
        setUserAgent: (state, action: PayloadAction<string>) => {
            state.userAgent = action.payload;
        }
    },
    selectors: {
        selectCommands: state => state.commands,
        selectInput: state => state.input,
    }
});

export const { enterCommand, updateInput, setUserAgent } = commandsSlice.actions;

export const { selectCommands, selectInput } = commandsSlice.selectors;

export default commandsSlice.reducer;