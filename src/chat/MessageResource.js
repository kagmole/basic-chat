'use strict';

module.exports = [
	'$resource',
	'properties',
	function($resource, properties) {
		var MessageResource;
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                                 CLOSURE BODY                                 |
|                                                                              |
\*----------------------------------------------------------------------------*/

MessageResource = $resource(properties.apiUrl + '/messages/:messageId', {
	messageId: '@messageId'
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
		
		return MessageResource;
	}
];
