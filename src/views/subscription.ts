import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body

export let Subscription = {
    view() {
            return m("div", {class: "subscriptionBlocks"}, [m("img[src='assets/subscription.jpg'][alt='subscribe']", {class: "subscriptionImg"}), [m("div", {class: "contactDiv"}, [m("h1", {class: "contact"}, "Contact"),
            [m("div", {class: "usernameClass"}, [m("label.label", {class: "username"}, "Username"), m("input.input[placeholder=Username]", {class: "inputUsername"})]),
            m("div", {class: "statusClass"}, [m("label.label", {class: "status"}, "Status"), m("input.input[placeholder=Status]", {class: "inputStatus"})]),
            m("div", {class: "saveClass"}, m("button.button[type=button]", {class: "buttonSave"}, "Save"))]])]])
    }
}

console.log("trial2")