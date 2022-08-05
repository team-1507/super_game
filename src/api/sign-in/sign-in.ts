import ApiService from '../api';
import { SignInData, SignInDataDto } from './types';

async function signIn(body: SignInData): Promise<SignInDataDto | null> {
    return ApiService.postRequest<SignInData, SignInDataDto>({
        address: 'auth/signin',
        body,
    });
}

async function logOut(): Promise<string | null> {
    return ApiService.postRequest({
        address: 'auth/logout',
    });
}

export default {
    signIn,
    logOut,
};
