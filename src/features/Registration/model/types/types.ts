export enum GenderProps {
    NOT_SELECTED = 'Не выбрано',
    MALE = 'Мужчина',
    FEMALE = 'Женщина'
}

export interface RegisterProps {
    email: string
    password: string
    city?: string
    age?: string
    gender?: GenderProps
}

export interface RegisterSchema {
    data: RegisterProps
    isLoading?: boolean
    error?: string
}