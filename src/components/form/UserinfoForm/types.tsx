import { HTMLProps } from 'react';
import { IUserState } from '../../../store/reducers';
import { SignUpData, SignUpDataDto } from '../../../api/sign-up/types';
import { SignInData, SignInDataDto } from '../../../api/sign-in/types';
import { UserDataType, UserDto, UserPasswordType } from '../../../api/user/types';

export type CallbackFnData =
    SignUpData |
    SignInData |
    UserDataType |
    UserPasswordType;
export type CallbackFnReturn = SignUpDataDto | SignInDataDto | UserDto | null;

export type UserinfoFormProps = HTMLProps<HTMLElement> & {
    formInputs: string[],
    submitTitle: string,
    callbackFn?(this: void, body: CallbackFnData): Promise<CallbackFnReturn>,
    valuesToSend: CallbackFnData,
    navigateOnSuccess?: string,
    user?: IUserState,
};
