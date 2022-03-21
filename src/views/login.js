"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const mithril_1 = __importDefault(require("mithril"));
var root = document.body;
exports.Login = {
    oninit: () => {
        console.log("init");
    },
    view() {
        return (0, mithril_1.default)("h1", { class: "logIn" }, "Log-in"),
            [(0, mithril_1.default)("div", { class: "username" }, "Username"), (0, mithril_1.default)("div", { class: "password" }, "Password")];
    }
};
