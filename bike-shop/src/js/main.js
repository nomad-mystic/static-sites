// Style stuff
import '../sass/main.scss';


// Create our app
import Vue from 'vue';

// Add components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Logo from './components/partials/common/Logo.vue';
import MainNav from './components/partials/common/Main-Nav.vue';
import MobileNav from './components/partials/common/Mobile-Nav.vue';
import SocialMedia from './components/partials/common/Social-Media.vue';
import Hero from './components/Hero.vue';
import Highlights from './components/Highlights.vue';

// Font Awesome
import { FontAwesomeIcon } from './vendor/font-awesome-load';


// My Components
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component(Header.name , Header);
Vue.component(Footer.name, Footer);
Vue.component(Logo.name, Logo);
Vue.component(MainNav.name, MainNav);
Vue.component(MobileNav.name, MobileNav);
Vue.component(SocialMedia.name, SocialMedia);
Vue.component(Hero.name, Hero);
Vue.component(Highlights.name, Highlights);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
});
