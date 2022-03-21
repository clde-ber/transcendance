import * as mithril from 'mithril';
import m from 'mithril';
import { Subscription } from './views/subscription';
import { Login } from './views/login';
import { routes } from './routes';

var root = document.body

export let Hello = {
    view() {
        return m("main",
            m("div", {class: "blocks"}, [
            m("div", {class:"block1"}, [m("img[src='assets/entry.jpg'][alt='transcendance']", {class: "image"})]),
            m("div", {class:"block2"}, [m("h1", {class: "title"}, "Transcendance"), m("div", {class: "buttons"}, [m(m.route.Link, {href: "/login", class: "signIn"}, "Sign-in"), m(m.route.Link, {href: "/subscription", class: "join"}, "Join")])])]))
    }
}

export let Splash = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!")
    }
}

m.mount(root, Splash)
m.mount(root, Login)
m.mount(root, Hello)
m.mount(root, Subscription)

routes();

console.log("trial")
//ajouter mdp
//page modifier infos utlisateur