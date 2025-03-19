import { configureStore } from '@reduxjs/toolkit'
import commandsSlice from "@/store/slices/commandsSlice";
import userSlice from "@/store/slices/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            commands: commandsSlice,
            user: userSlice,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']