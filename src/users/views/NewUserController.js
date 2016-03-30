'use strict';

module.exports = [
	'$location',
	'$scope',
	'pageService',
	'UserResource',
	function($location, $scope, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService.getPageScope().pageTitle = 'New user';

$scope.user = new UserResource();

$scope.validateAndSend = function() {
	
	$scope.user.birthday = $scope.birthdayDate.toISOString().slice(0, 10);
	
	$scope.user.$create({}, function() {
		$location.path('/users/' + $scope.user.userId);
	});
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
