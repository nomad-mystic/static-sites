// Add font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faBars,
    faTimes,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
} from './font-awesome-icons';

library.add(
    faBars,
    faTimes,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter
);

export {
    FontAwesomeIcon,
}
