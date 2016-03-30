'use strict';

module.exports = [
	'$routeParams',
	'$scope',
	'pageService',
	'UserResource',
	function($routeParams, $scope, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService.getPageScope().pageTitle = 'Show user';

$scope.user = UserResource.retrieve({
	userId: $routeParams.userId
});

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
