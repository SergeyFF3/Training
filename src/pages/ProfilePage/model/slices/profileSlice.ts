import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/profile";
import {registerUser} from "../../../../features/Registration/model/services/registerUser";
import {fetchProfileData} from "../services/fetchProfileData";
import {UserProps} from "../../../../entities/User/model/types/user";
import {RegisterProps} from "../../../../features/Registration";

const initialState: ProfileSchema = {

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<RegisterProps>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
                state.error = undefined
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions} = profileSlice
