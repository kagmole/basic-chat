'use strict';

module.exports = [
	'$location',
	'$routeParams',
	'$scope',
	'pageService',
	'UserResource',
	function($location, $routeParams, $scope, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService.getPageScope().pageTitle = 'Show user';

$scope.user = UserResource.retrieve({
	userId: $routeParams.userId
});

$scope.connect = function() {
	pageService.setCurrentUser($scope.user);
	
	$location.path('/chat');
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
