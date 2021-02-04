const $ = require('jquery');
global.$ = global.jQuery = $;
const Popper = require('popper.js');
global.Popper = global.Popper = Popper;

// any CSS you import will output into a single css file (app.css in this case)

import './styles/bootstrap.css';
import './bootstrap/dist/js/bootstrap.js';
import './styles/app.css';
import Vue from 'vue';
window.Vue = Vue;

