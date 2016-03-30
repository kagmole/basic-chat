'use strict';

// [ src/profile/views/ ]$

var app = angular.module('basicChatApp');

// Source files
app.controller('editUserController', require('./EditUserController.js'));
app.controller('listUsersController', require('./ListUsersController.js'));
app.controller('newUserController', require('./NewUserController.js'));
app.controller('showUserController', require('./ShowUserController.js'));
