import ApiService from '../api';
import { TEAM_NAME } from './constants';
import {
    SetLeaderboardData,
    GetLeaderboardData,
    SetLeaderboardDataDto,
} from './types';

function setPlayerScoreToLeaderboard({ teamName = TEAM_NAME, ...fields }: SetLeaderboardData): Promise<SetLeaderboardDataDto | null> {
    const body = Object.assign(fields, { teamName });
    return ApiService.postRequest<SetLeaderboardData, SetLeaderboardDataDto>({
        address: `leaderboard`,
        body,
    });
};

function getLeaderboard(body: GetLeaderboardData): Promise<SetLeaderboardData[]> {
    return ApiService.postRequest<GetLeaderboardData, any>({
        address: `leaderboard/${TEAM_NAME}`,
        body,
    });
};

export default {
    setPlayerScoreToLeaderboard,
    getLeaderboard,
};
