import {StateSchema} from "../../../../app/provider/StoreProvider/store";

export const getLoginEmail = (state: StateSchema) => state?.login?.email || ''

export const getLoginPassword = (state: StateSchema) => state?.login?.password || ''

export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading

export const getLoginError = (state: StateSchema) => state?.login?.error