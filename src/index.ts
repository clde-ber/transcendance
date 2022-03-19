import * as mithril from 'mithril';
import m from 'mithril';
var root = document.body
// Try it out! This is just to
// help get things started.
// EXAMPLE: component composition

// class signIn {
//     view() {
//         return m("button", `Sign-in`)
//     }
// }

// class join {
//     view() {
//         return m("button", `Join`)
//     }
// }

// var Hello = {
//     view: function() {
//         return m("div", [
//             m("h1", {"class":"title"}, "Transcendance"),
//             m("button", {class: "signIn", type:"button"}, " Sign in "),
//             m("button", {class: "join", type:"button"}, " Join ")
//         ])
//     }
// }

var Hello = {
    view() {
        return m("main",
            m("img[src='assets/entry.jpg'][alt='transcendance']", {class: "image"}),
            m("div", {class:"block"}, [m("h1", {class: "title"}, "Transcendance"), m("button.button[type=button]", {class: "signIn"}, "Sign-in"), m("button.button[type=button]", {class: "join"}, "Join")])
            //m("button.button[type=button]", {class: "signIn"}, "Sign-in"),
            //m("button.button[type=button]", {class: "join"}, "Join"),
        )
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

/*
var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Transcendance"),
            m("button.sign[type=button]", "Sign-in"),
            m("button.button[type=button]", "Join")
        ])
    }
}
*/