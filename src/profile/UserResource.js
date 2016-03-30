'use strict';

module.exports = [
	'$resource',
	'properties',
	function($resource, properties) {
		var UserResource;
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                                 CLOSURE BODY                                 |
|                                                                              |
\*----------------------------------------------------------------------------*/

UserResource = $resource(properties.apiUrl + '/users/:userId', {
	userId: '@userId'
}, {
	retrieveAll: {
		method: 'GET',
		isArray: true
	},
	retrieve: {
		method: 'GET'
	},
	create: {
		method: 'POST',
	},
	update: {
		method: 'PATCH'
	},
	'delete': {
		method: 'DELETE'
	}
});

/*----------------------------------------------------------------------------*\
|                                                                              |
|                          CLOSURE END - RETURN HOOK                           |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
		return UserResource;
	}
];
