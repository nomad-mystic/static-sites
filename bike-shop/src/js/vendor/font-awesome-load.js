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
    faStar,
    faArrowCircleRight,
} from './font-awesome-icons';

library.add(
    faBars,
    faTimes,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
    faStar,
    faArrowCircleRight
);

export {
    FontAwesomeIcon,
}
