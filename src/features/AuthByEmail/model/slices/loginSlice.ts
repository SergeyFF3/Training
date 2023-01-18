import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/types";
import {loginByEmail} from "../services/loginByEmail";

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,
    error: undefined
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginByEmail.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByEmail.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: loginReducer } = loginSlice
export const { actions: loginActions} = loginSlice
