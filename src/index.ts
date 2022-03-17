import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body
// Try it out! This is just to
// help get things started.
var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Transcendance"),
            m("button.button[type=button]", "Sign-in"),
        ])
    }
}
m.mount(root, Hello)
var Splash = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!")
    }
}
m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})