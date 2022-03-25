import * as mithril from 'mithril';
import m, { request } from 'mithril';
import { getProfileInfo, postProfileInfo } from '../requests/user'
import { profile_info, last_matches } from '../types/profileInfo'

export let getUserProfile = {
    token: 0,
    is_valid: true,
    username: "toto",
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
                getUserProfile.token = (token) ? token : 0;
                getUserProfile.is_valid = (result.is_valid) ? result.is_valid : true;
                getUserProfile.username = username;
                getUserProfile.avatar = (result.avatar) ? result.avatar : "";
                getUserProfile.status = result.status;
                getUserProfile.ladder = (result.ladder) ? result.ladder : 0;
                getUserProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                getUserProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                getUserProfile.matches = {first: (result.matches?.first) ? result.matches?.first : "", second: (result.matches?.second) ? result.matches?.second : "", third: (result.matches?.third) ? result.matches?.third : ""};
                getUserProfile.is_self = result.is_self;
            }
        })
        .catch (function(e) {
            console.log(e.message)
        })
    }
}

export let postUserProfile = {
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
    onload: (user: profile_info) => {
        return postProfileInfo(user)
        .then((result: any) => {
            if (result) {
                postUserProfile.token = (result.token) ? result.token : 0;
                postUserProfile.is_valid = (result.is_valid) ? result.is_valid : true;
                postUserProfile.username = (result.username) ? result.username : "";
                postUserProfile.avatar = (result.avatar) ? result.avatar : "";
                postUserProfile.status = result.status;
                postUserProfile.ladder = (result.ladder) ? result.ladder : 0;
                postUserProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                postUserProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                postUserProfile.matches = {first: (result.matches?.first) ? result.matches?.first : "", second: (result.matches?.second) ? result.matches?.second : "", third: (result.matches?.third) ? result.matches?.third : ""};
                postUserProfile.is_self = result.is_self;
            }
        })
        .catch (function(e) {
            console.log(e.message)
        })
    }
}