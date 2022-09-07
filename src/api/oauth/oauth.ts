import ApiService from '../api';
import { OAuthType } from './types';

async function getServiceId(redirect_uri: string): Promise<OAuthType | null> {
    return ApiService.getRequest<OAuthType>({
        address: 'oauth/yandex/service-id',
        queryParams: { redirect_uri },
    });
}

export default {
    getServiceId,
};
