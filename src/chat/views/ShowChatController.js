'use strict';

module.exports = [
	'$interval',
	'$location',
	'$scope',
	'MessageResource',
	'pageService',
	'UserResource',
	function($interval, $location, $scope, MessageResource, pageService, UserResource) {
		
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

var afterDate = Date.now();

$interval(function() {
	MessageResource.retrieveAll({
		after: afterDate
	}, function(messages) {
		
		messages.forEach(function(message) {
			
			if (message.author.userId !== pageService.getCurrentUser().userId) {
				$scope.messages.push(message);
			}
		});
	});
	
	afterDate = Date.now();
}, 1000);

$scope.sendMessage = function() {
	
	if ($scope.messageContent) {
		
		var message = new MessageResource();
		
		message.content = $scope.messageContent;
		
		message.$create({
			userId: pageService.getCurrentUser().userId
		}, function() {
			
			$scope.messages.push(message);
		})
		
		$scope.messageContent = '';
	}
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
