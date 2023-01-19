import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../shared/config/ThunkConfig/ThunkConfig";
import {$api} from "../../../../shared/api/api";
import {RegisterProps} from "../../../../features/Registration";

export const fetchProfileData = createAsyncThunk<RegisterProps, void, ThunkConfig<string>> (
    'profile/fetchProfileData',
    async (_, {rejectWithValue}) => {
        try {
            const res = await $api.get<RegisterProps>('/users')

            return res.data
        } catch (e) {
            return rejectWithValue('Ошибка загрузки данных пользователя')
        }
    }
)