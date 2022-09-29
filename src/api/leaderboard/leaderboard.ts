import ApiService from '../api';
import { TEAM_NAME, RATING_FIELD_NAME } from './constants';
import {
    SetLeaderboardData,
    GetLeaderboardData,
    SetLeaderboardDataDto,
} from './types';

function setPlayerScoreToLeaderboard(
    { teamName = TEAM_NAME, ratingFieldName = RATING_FIELD_NAME, ...fields }: SetLeaderboardData,
): Promise<SetLeaderboardDataDto | null> {
    const body = { teamName, ratingFieldName, ...fields };
    return ApiService.postRequest<SetLeaderboardData, SetLeaderboardDataDto>({
        address: 'leaderboard',
        body,
    });
}

function getLeaderboard(body: GetLeaderboardData): Promise<SetLeaderboardData[] | null> {
    const data = ApiService.postRequest<GetLeaderboardData, SetLeaderboardData[]>({
        address: `leaderboard/${TEAM_NAME}`,
        body,
    });
    return data;
}

export default {
    setPlayerScoreToLeaderboard,
    getLeaderboard,
};
