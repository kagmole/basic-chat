'use strict';

// [ src/profile/ ]$

var app = angular.module('basicChatApp');

// Source files
app.controller('profileController', require('./ProfileController.js'));

app.factory('UserResource', require('./UserResource.js'));
