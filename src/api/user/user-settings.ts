import ApiService from '../api';
import { UserDataType, UserDto, UserPasswordType } from './types';

async function changeUser(body: UserDataType): Promise<UserDto | null> {
    return ApiService.putRequest<UserDataType, UserDto>({
        address: 'user/profile',
        body,
    });
}

async function changePassword(body: UserPasswordType): Promise<UserDto | null> {
    return ApiService.putRequest<UserPasswordType, UserDto>({
        address: 'user/password',
        body,
    });
}
async function changeAvatar(body: FormData): Promise<UserDto | null> {
    return ApiService.putFileRequest<UserDto>({
        address: 'user/profile/avatar',
        body,
    });
}

export default {
    changeUser,
    changeAvatar,
    changePassword,
};
