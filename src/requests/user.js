"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProfileInfo = exports.getProfileInfo = void 0;
const mithril_1 = __importDefault(require("mithril"));
const getProfileInfo = (username) => {
    const params = {
        method: "Get",
        url: "http://localhost:3000/profile/:user",
        responseType: "json",
        params: { username },
    };
    return mithril_1.default.request(params);
};
exports.getProfileInfo = getProfileInfo;
const postProfileInfo = (user) => {
    const params = {
        method: "Post",
        url: "http://localhost:3000/profile/",
        responseType: "json",
        body: { user },
    };
    return mithril_1.default.request(params);
};
exports.postProfileInfo = postProfileInfo;
