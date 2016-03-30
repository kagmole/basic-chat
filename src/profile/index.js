'use strict';

// [ src/profile/ ]$

var app = angular.module('basicChatApp');

// Source files
app.factory('UserResource', require('./UserResource.js'));

// Source directories
require('./views/');
