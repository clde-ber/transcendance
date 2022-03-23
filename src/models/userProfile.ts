import * as mithril from 'mithril';
import m, { request } from 'mithril';
import { getProfileInfo } from '../requests/user'
import { profile_info, last_matches } from '../types/profileInfo'

export let userProfile = {
    token: 0,
    is_valid: true,
    username: "",
    avatar: "",
    status: "",
    ladder: 0,
    is_friend: false,
    is_blocked: false,
    matches: {first: "", second: "", third: ""},
    is_self: true,
    onload: (token: number, username: string) => {
        return getProfileInfo(token, username)
        .then((result: any) => {
            if (result) {
                userProfile.token = token;
                userProfile.is_valid = (typeof result.is_valid == 'boolean') ? result.is_valid : true;
                userProfile.username = username;
                userProfile.avatar = (result.avatar) ? result.avatar : "";
                userProfile.status = result.status;
                userProfile.ladder = (result.ladder) ? result.ladder : 0;
                userProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                userProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                userProfile.matches = {first: (result.matches?.first) ? result.matches?.first : "", second: (result.matches?.second) ? result.matches?.second : "", third: (result.matches?.third) ? result.matches?.third : ""};
                userProfile.is_self = result.is_self;
            }
        })
        .catch (function(e) {
            console.log(e.message)
        })
    }
}