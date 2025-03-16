import { configureStore } from '@reduxjs/toolkit'
import countSlice from "@/store/countSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            count: countSlice
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']