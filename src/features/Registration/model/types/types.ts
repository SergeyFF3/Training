export interface RegisterProps {
    email: string
    password: string
}

export interface RegisterSchema {
    data: RegisterProps
    isLoading?: boolean
    error?: string
}