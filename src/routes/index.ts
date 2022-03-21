import * as mithril from 'mithril';
import m from 'mithril';
import { Login } from '../views/login'
import { Subscription } from '../views/subscription'
import { Hello, Splash } from '../index'
var root = document.body

export function routes() {
    m.route(root, "/splash", {
        "/hello": Hello,
        "/splash": Splash,
        "/subscription": Subscription,
        "/login": Login
    })
}

// m.route(root, "/Splash", {
//     "/splash": Splash,
//     "/hello": Hello,
// })

// m.route(root, "/hello", {
//     "/login": Login,
//     "/subscription": Subscription,
// })