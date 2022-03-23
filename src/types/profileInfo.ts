export type last_matches = {
    first: string;
    second: string;
    third: string;
}

export type profile_info = {
    token?: number;
    is_valid: boolean;
    username: string;
    avatar: string;
    status: string;
    ladder: number;
    is_friend: boolean;
    is_blocked: boolean;
    matches: last_matches;
    is_self: true;
  }