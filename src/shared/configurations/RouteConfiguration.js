'use strict';

module.exports = [
	'$routeProvider',
	function($routeProvider) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                              CONFIGURATION BODY                              |
|                                                                              |
\*----------------------------------------------------------------------------*/

$routeProvider
	.when('/chat', {
		templateUrl: 'assets/views/chat/show.html',
		controller: 'showChatController'
	})
	.when('/users', {
		templateUrl: 'assets/views/users/list.html',
		controller: 'listUsersController'
	})
	.when('/users/new', {
		templateUrl: 'assets/views/users/new.html',
		controller: 'newUserController'
	})
	.when('/users/:userId', {
		templateUrl: 'assets/views/users/show.html',
		controller: 'showUserController'
	})
	.when('/users/:userId/edit', {
		templateUrl: 'assets/views/users/edit.html',
		controller: 'editUserController'
	})
	.otherwise({
		redirectTo: '/chat'
	});

/*----------------------------------------------------------------------------*\
|                                                                              |
|                              CONFIGURATION END                               |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
