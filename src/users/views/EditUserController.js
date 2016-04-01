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

pageService.getPageScope().pageTitle = 'Edit user';

$scope.userForm = {
	errors: {},
	values: {}
};

UserResource.retrieve({
	userId: $routeParams.userId
}, function(user) {
	
	$scope.userForm.values.firstName = user.firstName;
	$scope.userForm.values.lastName = user.lastName;
	$scope.userForm.values.birthday = new Date(user.birthday);
});

$scope.validateFormAndSend = function() {
	
	// Validate form
	var valid = true;
	
	for (var property in $scope.userForm.values) {
		var value = $scope.userForm.values[property];
		
		if (!value) {
			$scope.userForm.errors[property] = true;
			
			valid = false;
		} else {
			$scope.userForm.errors[property] = false;
		}
	}
	
	if (valid === false) {
		return;
	}
	
	var user = new UserResource();
	
	user.firstName = $scope.userForm.values.firstName;
	user.lastName = $scope.userForm.values.lastName;
	
	// Date object -> 'yyyy-MM-dd'
	user.birthday = $scope.userForm.values.birthday.toISOString().slice(0, 10);
	
	user.$update({
		userId: $routeParams.userId
	}, function() {
		$location.path('/users/' + user.userId);
	});
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
