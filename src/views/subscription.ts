import * as mithril from 'mithril';
import m from 'mithril';
import { getUserProfile, postUserProfile } from '../models/userProfile';
import { postProfileInfo } from '../requests/user';
var root = document.body

export let Subscription = {
    // oninit: function(vnode: any) {postUserProfile.onload(vnode.attrs)},
    controller() {
        
    },
    view() {
            return m("div", {class: "subscriptionBlocks"}, [[m("div", {class: "BlockSubscriptionImg"}, [m("img[src='assets/subscription.jpg'][alt='subscribe']", {class: "subscriptionImg"})])],
            [m("div", {class: "subscriptionDiv"}, [m("h1", {class: "idsSubscribe"}, "Create your account"),
            [m("div", {class: "usernameSubscribeClass"}, [m("label.label", {class: "usernameSubscribe"}, "Username"), m("input.input[placeholder=Username]", {value: postUserProfile.username, class: "inputUsernameSubscribe"})]),
            m("div", {class: "statusSubscribeClass"}, [m("label.label", {class: "statusSubscribe"}, "Status"), m("input.input[placeholder=Status]", {value: postUserProfile.status, class: "inputStatusSubscribe"})]),
            m("div", {class: "saveSubscribeClass"}, m("button.button[type=button]", {class: "buttonSaveSubscribe", onclick: postProfileInfo}, "Save"))]])]])
    }
}

console.log("trial2")