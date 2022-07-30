import ApiService from '../api';
import { SignInData, SignInDataDto } from './types';

async function signIn(body: SignInData): Promise<SignInDataDto | null> {
    return ApiService.postRequest<SignInData, SignInDataDto>({
        address: 'auth/signin',
        body,
    });
}

export default {
    signIn,
};
