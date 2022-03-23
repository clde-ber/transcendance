"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const mithril_1 = __importDefault(require("mithril"));
const userProfile_1 = require("../models/userProfile");
var root = document.body;
exports.Subscription = {
    oninit: function (vnode) { userProfile_1.userProfile.onload(vnode.attrs.token, vnode.attrs.username); },
    controller() {
    },
    view() {
        return (0, mithril_1.default)("div", { class: "subscriptionBlocks" }, [[(0, mithril_1.default)("div", { class: "BlockSubscriptionImg" }, [(0, mithril_1.default)("img[src='assets/subscription.jpg'][alt='subscribe']", { class: "subscriptionImg" })])],
            [(0, mithril_1.default)("div", { class: "subscriptionDiv" }, [(0, mithril_1.default)("h1", { class: "idsSubscribe" }, "Create your account"),
                    [(0, mithril_1.default)("div", { class: "usernameSubscribeClass" }, [(0, mithril_1.default)("label.label", { class: "usernameSubscribe" }, "Username"), (0, mithril_1.default)("input.input[placeholder=Username]", { value: userProfile_1.userProfile.username, class: "inputUsernameSubscribe" })]),
                        (0, mithril_1.default)("div", { class: "statusSubscribeClass" }, [(0, mithril_1.default)("label.label", { class: "statusSubscribe" }, "Status"), (0, mithril_1.default)("input.input[placeholder=Status]", { value: userProfile_1.userProfile.status, class: "inputStatusSubscribe" })]),
                        (0, mithril_1.default)("div", { class: "saveSubscribeClass" }, (0, mithril_1.default)("button.button[type=button]", { class: "buttonSaveSubscribe", onclick: userProfile_1.userProfile }, "Save"))]])]]);
    }
};
console.log("trial2");
