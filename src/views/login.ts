import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body

export let Login = {
    oninit: () => {
        console.log("init")
    },
    view() {
        return m("h1", {class: "logIn"}, "Log-in"),
        [ m("div", {class: "username"}, "Username"), m("div", {class: "password"}, "Password") ]
    }
}
