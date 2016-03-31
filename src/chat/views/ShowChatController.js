'use strict';

module.exports = [
	'$location',
	'$scope',
	'MessageResource',
	'pageService',
	'UserResource',
	function($location, $scope, MessageResource, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

if (pageService.getCurrentUser() === null) {
	$location.path('/users/new');
	
	return;
}

pageService.getPageScope().pageTitle = 'Let\'s chat!';

$scope.messages = MessageResource.retrieveAll();

$scope.sendMessage = function() {
	
	if ($scope.messageContent) {
		
		var message = new MessageResource();
		
		message.content = $scope.messageContent;
		
		message.$create({
			userId: pageService.getCurrentUser().userId
		}, function() {
			
			$scope.messages.push(message);
		})
	}
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
