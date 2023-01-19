import {RegisterProps} from "../../../../features/Registration";

export interface ProfileSchema {
    data?: RegisterProps
    formData?: RegisterProps
    isLoading?: boolean
    error?: string
}