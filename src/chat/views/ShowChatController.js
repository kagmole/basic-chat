'use strict';

module.exports = [
	'$scope',
	'MessageResource',
	'pageService',
	'UserResource',
	function($scope, MessageResource, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService.getPageScope().pageTitle = 'Let\'s chat!';

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
