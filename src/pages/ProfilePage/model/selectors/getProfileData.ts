import {StateSchema} from "../../../../app/provider/StoreProvider/store";

export const getProfileData = (state: StateSchema) => state?.profile?.data
export const getProfileFormData = (state: StateSchema) => state?.profile?.formData
export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading
export const getProfileError = (state: StateSchema) => state?.profile?.error