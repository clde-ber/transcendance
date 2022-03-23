"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Splash = exports.Hello = void 0;
const mithril_1 = __importDefault(require("mithril"));
const subscription_1 = require("./views/subscription");
const login_1 = require("./views/login");
const routes_1 = require("./routes");
var root = document.body;
exports.Hello = {
    view() {
        return (0, mithril_1.default)("main", (0, mithril_1.default)("div", { class: "blocks" }, [
            (0, mithril_1.default)("div", { class: "block1" }, [(0, mithril_1.default)("img[src='assets/entry.jpg'][alt='transcendance']", { class: "image" })]),
            (0, mithril_1.default)("div", { class: "block2" }, [(0, mithril_1.default)("h1", { class: "title" }, "Transcendance"), (0, mithril_1.default)("div", { class: "buttons" }, [(0, mithril_1.default)(mithril_1.default.route.Link, { href: "/login", class: "signIn" }, "Sign-in"), (0, mithril_1.default)(mithril_1.default.route.Link, { href: "/subscription", class: "join" }, "Join")])])
        ]));
    }
};
exports.Splash = {
    view: function () {
        return (0, mithril_1.default)("a", { href: "#!/hello" }, "Enter!");
    }
};
mithril_1.default.mount(root, exports.Splash);
mithril_1.default.mount(root, login_1.Login);
mithril_1.default.mount(root, exports.Hello);
mithril_1.default.mount(root, subscription_1.Subscription);
(0, routes_1.routes)();
console.log("trial");
//ajouter mdp
//page modifier infos utlisateur
//mithril js - simple application
