"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const mithril_1 = __importDefault(require("mithril"));
var root = document.body;
exports.Subscription = {
    view() {
        return (0, mithril_1.default)("div", { class: "subscriptionBlocks" }, [(0, mithril_1.default)("img[src='assets/subscription.jpg'][alt='subscribe']", { class: "subscriptionImg" }), [(0, mithril_1.default)("div", { class: "contactDiv" }, [(0, mithril_1.default)("h1", { class: "contact" }, "Contact"),
                    [(0, mithril_1.default)("div", { class: "usernameClass" }, [(0, mithril_1.default)("label.label", { class: "username" }, "Username"), (0, mithril_1.default)("input.input[placeholder=Username]", { class: "inputUsername" })]),
                        (0, mithril_1.default)("div", { class: "statusClass" }, [(0, mithril_1.default)("label.label", { class: "status" }, "Status"), (0, mithril_1.default)("input.input[placeholder=Status]", { class: "inputStatus" })]),
                        (0, mithril_1.default)("div", { class: "saveClass" }, (0, mithril_1.default)("button.button[type=button]", { class: "buttonSave" }, "Save"))]])]]);
    }
};
console.log("trial2");
