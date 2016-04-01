'use strict';

// Vendors first (order matters)
window.jQuery = window.$ = require('jquery');
require('bootstrap');
window.angular = require('angular');
	
angular.module('basicChatApp', [
	require('angular-resource'),
	require('angular-route'),
	require('angular-ui-bootstrap')
]);

// Application's styles and scripts
require('./main.css');
require('./src/');
