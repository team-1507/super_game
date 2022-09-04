export interface SignInData {
    login: string;
    password: string;
}

export type SignInDataDto = 'OK' | {
    reason?: string;
};
