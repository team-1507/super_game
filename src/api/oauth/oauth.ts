import ApiService from '../api';
import { OAuthType } from './types';

async function getServiceId(redirect_uri: string): Promise<OAuthType | null> {
    return ApiService.getRequest<OAuthType>({
        address: 'oauth/yandex/service-id',
        queryParams: { redirect_uri },
    });
}

async function signInWithYandex(body: { code: string, redirect_uri: string })
    : Promise<string | null> {
    return ApiService.postRequest({
        address: 'oauth/yandex',
        isJson: false,
        body,
    });
}

export default {
    getServiceId,
    signInWithYandex,
};
