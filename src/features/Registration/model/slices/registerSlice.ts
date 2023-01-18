import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RegisterSchema} from "../types/types";
import {registerUser} from "../services/registerUser";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const initialState: RegisterSchema = {
    data: {
        email: '',
        password: ''
    }
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.data.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.data.password = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(registerUser.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            } )
    }
})

export const { reducer: registerReducer } = registerSlice
export const { actions: registerActions} = registerSlice
