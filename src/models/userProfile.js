"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = void 0;
const user_1 = require("../requests/user");
exports.userProfile = {
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
    onload: (token, username) => {
        return (0, user_1.getProfileInfo)(token, username)
            .then((result) => {
            var _a, _b, _c, _d, _e, _f;
            if (result) {
                exports.userProfile.token = token;
                exports.userProfile.is_valid = (typeof result.is_valid == 'boolean') ? result.is_valid : true;
                exports.userProfile.username = username;
                exports.userProfile.avatar = (result.avatar) ? result.avatar : "";
                exports.userProfile.status = result.status;
                exports.userProfile.ladder = (result.ladder) ? result.ladder : 0;
                exports.userProfile.is_friend = (result.is_friend) ? result.is_friend : false;
                exports.userProfile.is_blocked = (result.is_blocked) ? result.is_blocked : false;
                exports.userProfile.matches = { first: ((_a = result.matches) === null || _a === void 0 ? void 0 : _a.first) ? (_b = result.matches) === null || _b === void 0 ? void 0 : _b.first : "", second: ((_c = result.matches) === null || _c === void 0 ? void 0 : _c.second) ? (_d = result.matches) === null || _d === void 0 ? void 0 : _d.second : "", third: ((_e = result.matches) === null || _e === void 0 ? void 0 : _e.third) ? (_f = result.matches) === null || _f === void 0 ? void 0 : _f.third : "" };
                exports.userProfile.is_self = result.is_self;
            }
        })
            .catch(function (e) {
            console.log(e.message);
        });
    }
};
