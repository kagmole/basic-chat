'use strict';

// [ src/page/ ]$

var app = angular.module('basicChatApp');

// Source files
app.controller('pageController', require('./PageController.js'));

app.factory('pageService', require('./PageService.js'));
