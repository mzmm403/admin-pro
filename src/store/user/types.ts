export interface UserState {
    username: string;
    accessToken: string;
    refreshToken?: string;
    roles: string[];
}