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

$scope.userForm = {
	errors: {},
	values: {}
}

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
	
	user.username = $scope.userForm.values.username;
	user.firstName = $scope.userForm.values.firstName;
	user.lastName = $scope.userForm.values.lastName;
	
	// Date object -> 'yyyy-MM-dd'
	user.birthday = $scope.userForm.values.birthday.toISOString().slice(0, 10);
	
	user.$create({}, function() {
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
