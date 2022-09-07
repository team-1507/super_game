export interface BaseRequestParams {
    address: string;
    queryParams?: Record<string, unknown>;
}

export interface GetRequestParams<B = void> extends BaseRequestParams {
    body?: B;
}

export interface PostRequestParams<B = void> extends BaseRequestParams {
    body?: B;
    queryParams?: Record<string, unknown>;
    isJson?: boolean
}

export interface PutRequestParams<B> extends BaseRequestParams {
    body?: B;
}

export interface DeleteRequestParams<B> extends BaseRequestParams {
    body?: B;
}

export interface ErrorResponse {
    reason: string;
}
