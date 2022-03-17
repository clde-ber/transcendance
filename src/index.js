"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(require("mithril"));
var root = document.body;
// Try it out! This is just to
// help get things started.
var Hello = {
    view: function () {
        return (0, mithril_1.default)("main", [
            (0, mithril_1.default)("h1", { class: "title" }, "Transcendance"),
            (0, mithril_1.default)("button.button[type=button]", "Sign-in"),
        ]);
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
