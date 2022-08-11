import ApiService from '../api';
import { UserDto } from './types';

async function getUserData(userId: number): Promise<UserDto | null> {
    return ApiService.getRequest<UserDto>({
        address: `user/${userId}`,
    });
}

async function getCurrentUser(): Promise<UserDto | null> {
    return ApiService.getRequest<UserDto>({
        address: 'auth/user',
    });
}

export default {
    getUserData,
    getCurrentUser,
};
