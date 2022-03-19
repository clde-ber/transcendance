"use strict";
// import * as mithril from 'mithril';
// import m from 'mithril';
// var root = document.body
// // Try it out! This is just to
// // help get things started.
// // EXAMPLE: component composition
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(require("mithril"));
var root = document.body;
// Try it out! This is just to
// help get things started.
// EXAMPLE: component composition
// class signIn {
//     view() {
//         return m("button", `Sign-in`)
//     }
// }
// class join {
//     view() {
//         return m("button", `Join`)
//     }
// }
// var Hello = {
//     view: function() {
//         return m("div", [
//             m("h1", {"class":"title"}, "Transcendance"),
//             m("button", {class: "signIn", type:"button"}, " Sign in "),
//             m("button", {class: "join", type:"button"}, " Join ")
//         ])
//     }
// }
var Subscription = {
    view() {
        return (0, mithril_1.default)("h1", { class: "contact" }, "Contact"),
            (0, mithril_1.default)("div", { class: "logIn" }, [(0, mithril_1.default)("div", { class: "firstName" }, "first name"), (0, mithril_1.default)("div", { class: "lastName" }, "last name"), (0, mithril_1.default)("div", { class: "mobile" }, "mobile"), (0, mithril_1.default)("div", { class: "mail" }, "mail"), (0, mithril_1.default)("div", { class: "address" }, "address"), (0, mithril_1.default)("div", { class: "zipCode" }, "zipcode"), (0, mithril_1.default)("div", { class: "city" }, "city"), (0, mithril_1.default)("div", { class: "country" }, "county")]);
    }
};
var Login = {
    view() {
        return (0, mithril_1.default)("h1", { class: "logIn" }, "Log-in"),
            [(0, mithril_1.default)("div", { class: "username" }, "Username"), (0, mithril_1.default)("div", { class: "password" }, "Password")];
    }
};
var Hello = {
    view() {
        return (0, mithril_1.default)("main", (0, mithril_1.default)("div", { class: "blocks" }, [
            (0, mithril_1.default)("div", { class: "block1" }, [(0, mithril_1.default)("img[src='assets/entry.jpg'][alt='transcendance']", { class: "image" })]),
            (0, mithril_1.default)("div", { class: "block2" }, [(0, mithril_1.default)("h1", { class: "title" }, "Transcendance"), (0, mithril_1.default)("div", { class: "buttons" }, [(0, mithril_1.default)(mithril_1.default.route.Link, { href: "/login", class: "signIn" }, "Sign-in"), (0, mithril_1.default)(mithril_1.default.route.Link, { href: "/subscription", class: "join" }, "Join")])])
        ]));
        //m("button.button[type=button]", {class: "signIn"}, "Sign-in"),
        //m("button.button[type=button]", {class: "join"}, "Join"),
    }
};
mithril_1.default.mount(root, Hello);
mithril_1.default.mount(root, Subscription);
mithril_1.default.mount(root, Login);
var Splash = {
    view: function () {
        return (0, mithril_1.default)("a", { href: "#!/hello" }, "Enter!");
    }
};
mithril_1.default.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
});
mithril_1.default.route(root, "/hello", {
    "/hello": Hello,
    "/subscription": Subscription,
    "/login": Login,
});
/*
var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Transcendance"),
            m("button.sign[type=button]", "Sign-in"),
            m("button.button[type=button]", "Join")
        ])
    }
}
*/ 
