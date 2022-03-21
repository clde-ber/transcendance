"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const mithril_1 = __importDefault(require("mithril"));
const login_1 = require("../views/login");
const subscription_1 = require("../views/subscription");
const index_1 = require("../index");
var root = document.body;
function routes() {
    mithril_1.default.route(root, "/splash", {
        "/hello": index_1.Hello,
        "/splash": index_1.Splash,
        "/subscription": subscription_1.Subscription,
        "/login": login_1.Login
    });
}
exports.routes = routes;
// m.route(root, "/Splash", {
//     "/splash": Splash,
//     "/hello": Hello,
// })
// m.route(root, "/hello", {
//     "/login": Login,
//     "/subscription": Subscription,
// })
