import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {  RegisterSchema } from "features/Registration";
import {registerReducer} from 'features/Registration/model/slices/registerSlice'
import {useDispatch} from "react-redux";
import {LoginSchema} from "features/AuthByEmail";
import { loginReducer } from "features/AuthByEmail/model/slices/loginSlice";
import {UserSchema} from "../../../../entities/User";
import { userReducer } from "entities/User/model/slices/userSlice";

export interface StateSchema {
    register: RegisterSchema
    login: LoginSchema
    user: UserSchema
}

const RootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    user: userReducer
})

export const store = configureStore<StateSchema>({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch