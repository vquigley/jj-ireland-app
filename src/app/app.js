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
require('./learn/routes')
require('./play/routes')
require('./directives/belts/belts');
require('./directives/imgPreload');
require('./services/syllabus');
require('./services/common');


export default MODULE_NAME;