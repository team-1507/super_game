export interface SignUpData {
    avatar: string
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
}

export interface SignUpDataDto {
    id?: string
    reason?: string
}
