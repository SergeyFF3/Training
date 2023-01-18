import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserProps} from "../../../../entities/User/model/types/user";
import {ThunkConfig} from "../../../../shared/config/ThunkConfig/ThunkConfig";
import {$api} from "../../../../shared/api/api";
import {USER_LOCAL_STORAGE_KEY} from "../../../../shared/const/localstorage/items";
import {userActions} from "../../../../entities/User/model/slices/userSlice";

interface LoginByEmailProps {
    email: string
    password: string
}


export const loginByEmail = createAsyncThunk<UserProps, LoginByEmailProps, ThunkConfig<string>> (
    'login/loginByEmail',
    async (loginData, {rejectWithValue, dispatch}) => {
        try {
            const res = await $api.post<UserProps>('/login', loginData)

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(res.data))
            dispatch(userActions.setAuthData(res.data))

            return res.data
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)