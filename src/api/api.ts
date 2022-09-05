import { ErrorResponse, GetRequestParams, PostRequestParams, PutRequestParams } from './types';
import { notification } from 'antd';
import { ErrorsList } from "./const";

const API_URL = 'https://ya-praktikum.tech/api/v2';

const openNotification = (title: string, text: string ) => {
    notification.open({
        message: title,
        description: text,
    });
};

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
}: GetRequestParams): Promise<R | null> {
    const url = getUrl(address, queryParams);

    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url.toString(), {
        method: 'GET',
        headers,
        mode: 'cors',
        credentials: 'include',
    });

    if (response.status === 200) {
        return await response.json() as unknown as R;
    }
    openNotification(ErrorsList.serverError, (await response.json() as unknown as ErrorResponse).reason)
    return null;
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
        mode: 'cors',
        body: body ? JSON.stringify(body) : null,
        credentials: 'include',
    });
    if (response.status === 200) {
        return response.json() as unknown as R;
    }
    openNotification(ErrorsList.serverError, (await response.json() as unknown as ErrorResponse).reason)
    return null;
}

async function putRequest<B, R>({
    address,
    body,
    queryParams,
}: PutRequestParams<B>): Promise<R | null> {
    const url = getUrl(address, queryParams);

    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url.toString(), {
        method: 'PUT',
        headers,
        body: body ? JSON.stringify(body) : null,
        credentials: 'include',
    });

    if (response.status === 200) {
        return await response.json() as unknown as R;
    }
    openNotification(ErrorsList.serverError, (await response.json() as unknown as ErrorResponse).reason)
    return null;
}

async function putFileRequest<R>({
    address,
    body,
    queryParams,
}: PostRequestParams<FormData>): Promise<R | null> {
    const url = getUrl(address, queryParams);

    const response = await fetch(url.toString(), {
        method: 'PUT',
        body,
        credentials: 'include',
    });

    if (response.status === 200) {
        return await response.json() as unknown as R;
    }
    openNotification(ErrorsList.serverError, (await response.json() as unknown as ErrorResponse).reason)
    return null;
}

export default {
    getRequest,
    postRequest,
    putRequest,
    putFileRequest,
};
