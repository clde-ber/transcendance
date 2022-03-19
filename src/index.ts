// import * as mithril from 'mithril';
// import m from 'mithril';
// var root = document.body
// // Try it out! This is just to
// // help get things started.
// // EXAMPLE: component composition

// // class signIn {
// //     view() {
// //         return m("button", `Sign-in`)
// //     }
// // }

// // class join {
// //     view() {
// //         return m("button", `Join`)
// //     }
// // }

// // var Hello = {
// //     view: function() {
// //         return m("div", [
// //             m("h1", {"class":"title"}, "Transcendance"),
// //             m("button", {class: "signIn", type:"button"}, " Sign in "),
// //             m("button", {class: "join", type:"button"}, " Join ")
// //         ])
// //     }
// // }

// var Subscribe = {
//     view() {
//         return m("h1", {class: "contact"}, "Contact"),
//         m("div", {class: "logIn"}, [m("div", {class: "firstName"}, "first name"), m("div", {class: "lastName"}, "last name"), m("div", {class: "mobile"}, "mobile"), m("div", {class: "mail"}, "mail"), m("div", {class: "address"}, "address"), m("div", {class: "zipCode"}, "zipcode"), m("div", {class: "city"}, "city"), m("div", {class: "country"}, "county")])
//     }
// }

// let Hello = {
//     view() {
//         return m("main",
//             m("div", {class: "blocks"}, [
//             m("div", {class:"block1"}, [m("img[src='assets/entry.jpg'][alt='transcendance']", {class: "image"})]),
//             m("div", {class:"block2"}, [m("h1", {class: "title"}, "Transcendance"), m("div", {class: "buttons"}, [m("button.button[type=button]", {class: "signIn"}, "Sign-in"), m("button.button[type=button]", {class: "join", onclick: () => { return m("a[href='/Subscribe']", {config: m.route}, "subscribe") }} )])])]))
//     }
// }

// let Splash = {
//     view: function() {
//         return m("a", {href: "#!/hello"}, "Enter!")
//     }
// }

// m.mount(root, Hello)
// m.mount(root, Subscribe)

// m.route(root, "/splash", {
//     "/splash": Splash,
//     "/hello": Hello,
// })

// /*
// var Hello = {
//     view: function() {
//         return m("main", [
//             m("h1", {class: "title"}, "Transcendance"),
//             m("button.sign[type=button]", "Sign-in"),
//             m("button.button[type=button]", "Join")
//         ])
//     }
// }
// */

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

var Subscription = {
    view() {
            return m("h1", {class: "contact"}, "Contact"),
            m("div", {class: "logIn"}, [m("div", {class: "firstName"}, "first name"), m("div", {class: "lastName"}, "last name"), m("div", {class: "mobile"}, "mobile"), m("div", {class: "mail"}, "mail"), m("div", {class: "address"}, "address"), m("div", {class: "zipCode"}, "zipcode"), m("div", {class: "city"}, "city"), m("div", {class: "country"}, "county")])
    }
}

var Login = {
    view() {
        return m("h1", {class: "logIn"}, "Log-in"),
        [ m("div", {class: "username"}, "Username"), m("div", {class: "password"}, "Password") ]
    }
}

var Hello = {
    view() {
        return m("main",
            m("div", {class: "blocks"}, [
            m("div", {class:"block1"}, [m("img[src='assets/entry.jpg'][alt='transcendance']", {class: "image"})]),
            m("div", {class:"block2"}, [m("h1", {class: "title"}, "Transcendance"), m("div", {class: "buttons"}, [m(m.route.Link, {href: "/login", class: "signIn"}, "Sign-in"), m(m.route.Link, {href: "/subscription", class: "join"}, "Join")])])]))
            //m("button.button[type=button]", {class: "signIn"}, "Sign-in"),
            //m("button.button[type=button]", {class: "join"}, "Join"),
    }
}

m.mount(root, Hello)
m.mount(root, Subscription)
m.mount(root, Login)
var Splash = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!")
    }
}
m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})

m.route(root, "/hello", {
    "/hello": Hello,
    "/subscription": Subscription,
    "/login": Login,
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