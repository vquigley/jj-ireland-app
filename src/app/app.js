// JS dependencies...

// Angular dependencies
import angular from 'angular';
require('angular-animate');
require('angular-material');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('angular-breadcrumb');

// Other vendor dependencies
require("font-awesome-webpack");

// CSS dependencies

// Vendor
import '../../node_modules/angular-material/angular-material.css'

// CSS requires;
import '../styles/app.less';
import '../styles/app.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.bootstrap', "ui.router", 'ngAnimate', 'ngMaterial', 'ncy-angular-breadcrumb']);

// Local requires
require('./routes');

// Custom angular objects. Must be required after angular app is defined.
require('./learn/learnBeltsController');
require('./learn/learnSyllabusController');
require('./directives/sidenav/sidenav');
require('./directives/imgPreload');
require('./services/syllabus');
require('./services/common');


export default MODULE_NAME;