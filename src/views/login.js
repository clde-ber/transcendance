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
        return (0, mithril_1.default)("div", { class: "loginBlocks" }, [[(0, mithril_1.default)("div", { class: "loginDiv" }, [(0, mithril_1.default)("h1", { class: "idsLogin" }, "Sign-in"),
                    [(0, mithril_1.default)("div", { class: "usernameLoginClass" }, [(0, mithril_1.default)("label.label", { class: "usernameLogin" }, "Username"), (0, mithril_1.default)("input.input[placeholder=Username]", { class: "inputUsernameLogin" })]),
                        (0, mithril_1.default)("div", { class: "passwordLoginClass" }, [(0, mithril_1.default)("label.label", { class: "passwordLogin" }, "Password"), (0, mithril_1.default)("input.input[placeholder=Password]", { class: "inputPasswordLogin" })]),
                        (0, mithril_1.default)("div", { class: "confirmLoginClass" }, (0, mithril_1.default)("button.button[type=button]", { class: "buttonConfirmLogin" }, "Confirm"))]]), (0, mithril_1.default)("img[src='assets/login.jpg'][alt='login']", { class: "loginImg" })]]);
    }
};
