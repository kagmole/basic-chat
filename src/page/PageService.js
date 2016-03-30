'use strict';

module.exports = [
	// No dependency
	function() {
		var pageService;
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                                 CLOSURE BODY                                 |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService = {};

// Current user
pageService._currentUser = null;

pageService.getCurrentUser = function() {
	return pageService._currentUser;
};

pageService.setCurrentUser = function(currentUser) {
	pageService._currentUser = currentUser;
};

// Page scope
pageService._pageScope = null;

pageService.getPageScope = function() {
	return pageService._pageScope;
};

pageService.setPageScope = function(pageScope) {
	pageService._pageScope = pageScope;
};

/*----------------------------------------------------------------------------*\
|                                                                              |
|                          CLOSURE END - RETURN HOOK                           |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
		return pageService;
	}
];
