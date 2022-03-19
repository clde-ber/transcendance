"use strict";
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
var Hello = {
    view() {
        return (0, mithril_1.default)("main", (0, mithril_1.default)("img[src='assets/entry.jpg'][alt='transcendance']", { class: "image" }), (0, mithril_1.default)("div", { class: "block" }, [(0, mithril_1.default)("h1", { class: "title" }, "Transcendance"), (0, mithril_1.default)("div", { class: "buttons" }, [(0, mithril_1.default)("button.button[type=button]", { class: "signIn" }, "Sign-in"), (0, mithril_1.default)("button.button[type=button]", { class: "join" }, "Join")])])
        //m("button.button[type=button]", {class: "signIn"}, "Sign-in"),
        //m("button.button[type=button]", {class: "join"}, "Join"),
        );
    }
};
mithril_1.default.mount(root, Hello);
var Splash = {
    view: function () {
        return (0, mithril_1.default)("a", { href: "#!/hello" }, "Enter!");
    }
};
mithril_1.default.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
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
