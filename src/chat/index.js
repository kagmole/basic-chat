'use strict';

// [ src/chat/ ]$

var app = angular.module('basicChatApp');

// Source files
app.factory('MessageResource', require('./MessageResource.js'));

// Source folders
require('./views/');
