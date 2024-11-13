// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import {Dropdown} from 'bootstrap';

// Import FancyBox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind();

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();