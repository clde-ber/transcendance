"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserProfile = exports.getUserProfile = void 0;
const user_1 = require("../requests/user");
exports.getUserProfile = {
    token: 0,
    is_valid: true,
    username: "toto",
    avatar: "",
    status: "",
    ladder: 0,
    is_friend: false,
    is_blocked: false,
    matches: { first: "", second: "", third: "" },
    is_self: true,
    onload: (token, username) => {
        return (0, user_1.getProfileInfo)(token, username)
            .then((result) => {
            var _a, _b, _c, _d, _e, _f;
            if (result) {
                exports.getUserProfile.token = (token) ? token : 0;
                exports.getUserProfile.is_valid = (result.is_valid) ? result.is_valid : true;
                exports.getUserProfile.username = username;
                exports.getUserProfile.avatar = (result.avatar) ? result.avatar : "";
                exports.getUserProfile.status = result.status;
                exports.getUserProfile.ladder = (result.ladder) ? result.ladder : 0;
                exports.getUserProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                exports.getUserProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                exports.getUserProfile.matches = { first: ((_a = result.matches) === null || _a === void 0 ? void 0 : _a.first) ? (_b = result.matches) === null || _b === void 0 ? void 0 : _b.first : "", second: ((_c = result.matches) === null || _c === void 0 ? void 0 : _c.second) ? (_d = result.matches) === null || _d === void 0 ? void 0 : _d.second : "", third: ((_e = result.matches) === null || _e === void 0 ? void 0 : _e.third) ? (_f = result.matches) === null || _f === void 0 ? void 0 : _f.third : "" };
                exports.getUserProfile.is_self = result.is_self;
            }
        })
            .catch(function (e) {
            console.log(e.message);
        });
    }
};
exports.postUserProfile = {
    token: 0,
    is_valid: true,
    username: "",
    avatar: "",
    status: "",
    ladder: 0,
    is_friend: false,
    is_blocked: false,
    matches: { first: "", second: "", third: "" },
    is_self: true,
    onload: (user) => {
        return (0, user_1.postProfileInfo)(user)
            .then((result) => {
            var _a, _b, _c, _d, _e, _f;
            if (result) {
                exports.postUserProfile.token = (result.token) ? result.token : 0;
                exports.postUserProfile.is_valid = (result.is_valid) ? result.is_valid : true;
                exports.postUserProfile.username = (result.username) ? result.username : "";
                exports.postUserProfile.avatar = (result.avatar) ? result.avatar : "";
                exports.postUserProfile.status = result.status;
                exports.postUserProfile.ladder = (result.ladder) ? result.ladder : 0;
                exports.postUserProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                exports.postUserProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                exports.postUserProfile.matches = { first: ((_a = result.matches) === null || _a === void 0 ? void 0 : _a.first) ? (_b = result.matches) === null || _b === void 0 ? void 0 : _b.first : "", second: ((_c = result.matches) === null || _c === void 0 ? void 0 : _c.second) ? (_d = result.matches) === null || _d === void 0 ? void 0 : _d.second : "", third: ((_e = result.matches) === null || _e === void 0 ? void 0 : _e.third) ? (_f = result.matches) === null || _f === void 0 ? void 0 : _f.third : "" };
                exports.postUserProfile.is_self = result.is_self;
            }
        })
            .catch(function (e) {
            console.log(e.message);
        });
    }
};
