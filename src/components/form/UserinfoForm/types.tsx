import { HTMLProps } from 'react';
import { IUserState } from '../../../store/reducers';
import { SignUpData, SignUpDataDto } from '../../../api/sign-up/types';
import { SignInData, SignInDataDto } from '../../../api/sign-in/types';

export type CallbackFnData = SignUpData | SignInData | Record<string, never>;
export type CallbackFnReturn = SignUpDataDto | SignInDataDto | null;

export type UserinfoFormProps = HTMLProps<HTMLElement> & {
    // formInputs: (keyof typeof inputs)[],
    formInputs: string[],
    submitTitle: string,
    callbackFn?(this: void, body: CallbackFnData): Promise<CallbackFnReturn>,
    valuesToSend: CallbackFnData,
    navigateOnSuccess?: string,
    user?: IUserState,
};
