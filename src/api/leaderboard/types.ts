export interface SetLeaderboardData {
    data: GetLeaderboardDataDto;
    ratingFieldName?: string;
    teamName?: string;
}

export interface GetLeaderboardData {
    ratingFieldName: string;
    cursor: number;
    limit: number;
}

export type SetLeaderboardDataDto = 'OK' | {
    reason?: string
};

export interface GetLeaderboardDataDto {
    score: number;
    time: number;
    name: string;
}
