import {registerSlice} from "../slices/registerSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {RegisterProps} from "../..";
import {ThunkConfig} from "../../../../shared/config/ThunkConfig/ThunkConfig";
import {$api} from "../../../../shared/api/api";

export const registerUser = createAsyncThunk<RegisterProps, RegisterProps, ThunkConfig<string>> (
    'register/registerUser',
    async (regData, {rejectWithValue}) => {
        try {
            const res = await $api.post<RegisterProps>('/register', regData)

            return res.data
        } catch (e) {
            return rejectWithValue('Некорректные данные')
        }
    }
)