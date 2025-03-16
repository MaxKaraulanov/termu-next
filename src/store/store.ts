import { configureStore } from '@reduxjs/toolkit'
import commandsSlice from "@/store/commandsSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            commands: commandsSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']