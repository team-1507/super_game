import { GetRequestParams, PostRequestParams } from './types';

const API_URL = 'https://ya-praktikum.tech/api/v2';

function getUrl(
    address: string,
    queryParams?: Record<string, unknown>,
): URL {
    const url = new URL(`${API_URL}/${address}`);

    if (queryParams) {
        Object.keys(queryParams).forEach((key) => url.searchParams
            .append(key, String(queryParams[key])));
    }
    return url;
}

async function getRequest<R>({
    address,
    queryParams,
    body,
}: GetRequestParams): Promise<R | null> {
    const url = getUrl(address, queryParams);

    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url.toString(), {
        method: 'GET',
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    return await response.json() as unknown as R;
}

async function postRequest<B, R>({
    address,
    body,
    queryParams,
}: PostRequestParams<B>): Promise<R | null> {
    const url = getUrl(address, queryParams);

    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url.toString(), {
        method: 'POST',
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    return await response.json() as unknown as R;
}

export default {
    getRequest,
    postRequest,
};
