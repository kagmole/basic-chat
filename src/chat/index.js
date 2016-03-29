'use strict';

// [ src/chat/ ]$

var app = angular.module('basicChatApp');

// Source files
app.controller('chatController', require('./ChatController.js'));

app.factory('MessageResource', require('./MessageResource.js'));
