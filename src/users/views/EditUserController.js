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

pageService.getPageScope().pageTitle = 'Edit user';

$scope.user = UserResource.retrieve({
	userId: $routeParams.userId
}, function() {
	$scope.birthdayDate = new Date($scope.user.birthday);
});

$scope.validateAndSend = function() {
	
	$scope.user.birthday = $scope.birthdayDate.toISOString().slice(0, 10);
	
	$scope.user.$update({
		userId: $scope.user.userId
	}, function() {
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
