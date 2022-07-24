import ApiService from '../api';
import { SignUpData, SignUpDataDto } from './types';

async function signUp(body: SignUpData): Promise<SignUpDataDto | null> {
    return ApiService.postRequest<SignUpData, SignUpDataDto>({
        address: 'auth/signup',
        body,
    });
}

export default {
    signUp,
};
