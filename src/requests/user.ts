import * as mithril from 'mithril';
import m, { request } from 'mithril';
import { last_matches, profile_info } from '../types/profileInfo'
import { RequestParams } from '../types/requests';

export const getProfileInfo = (username: string) => {
    const params: RequestParams = {
        method: "Get",
        url: "http://localhost:3000/profile/:user",
        responseType:"json",
        params: {username},
    }
    return m.request(params)
}

export const postProfileInfo = (user: profile_info) => {
    const params: RequestParams = {
        method: "Post",
        url: "http://localhost:3000/profile/",
        responseType:"json",
        body: {user},
    }
    return m.request(params)
}