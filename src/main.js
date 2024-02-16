import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import { router } from  './router'; 

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* icons */
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faPhp} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faVuejs} from '@fortawesome/free-brands-svg-icons';
import {faLaravel} from '@fortawesome/free-brands-svg-icons';
import {faBoltLightning} from '@fortawesome/free-solid-svg-icons';

import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faHtml5, faCss3Alt, faJs, faPhp, faDatabase, faBootstrap, faVuejs, faLaravel, faArrowRight, faArrowLeft, faBoltLightning);
// Fine Font awesome


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
