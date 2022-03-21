import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body

export let Login = {
    oninit: () => {
        console.log("init")
    },
    view() {
        return m("div", {class: "loginBlocks"}, [[m("div", {class: "loginDiv"}, [m("h1", {class: "idsLogin"}, "Sign-in"),
            [m("div", {class: "usernameLoginClass"}, [m("label.label", {class: "usernameLogin"}, "Username"), m("input.input[placeholder=Username]", {class: "inputUsernameLogin"})]),
            m("div", {class: "passwordLoginClass"}, [m("label.label", {class: "passwordLogin"}, "Password"), m("input.input[placeholder=Password]", {class: "inputPasswordLogin"})]),
            m("div", {class: "confirmLoginClass"}, m("button.button[type=button]", {class: "buttonConfirmLogin"}, "Confirm"))]])], m("div", {class: "loginImg"}, [m("img[src='assets/login.jpg'][alt='login']", {class: "loginImg"})])])
    }
}