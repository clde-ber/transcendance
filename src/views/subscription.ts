import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body

export let Subscription = {
    view() {
            return m("div", {class: "subscriptionBlocks"}, [[m("div", {class: "BlockSubscriptionImg"}, [m("img[src='assets/subscription.jpg'][alt='subscribe']", {class: "subscriptionImg"})])],
            [m("div", {class: "subscriptionDiv"}, [m("h1", {class: "idsSubscribe"}, "Create your account"),
            [m("div", {class: "usernameSubscribeClass"}, [m("label.label", {class: "usernameSubscribe"}, "Username"), m("input.input[placeholder=Username]", {class: "inputUsernameSubscribe"})]),
            m("div", {class: "statusSubscribeClass"}, [m("label.label", {class: "statusSubscribe"}, "Status"), m("input.input[placeholder=Status]", {class: "inputStatusSubscribe"})]),
            m("div", {class: "saveSubscribeClass"}, m("button.button[type=button]", {class: "buttonSaveSubscribe"}, "Save"))]])]])
    }
}

console.log("trial2")