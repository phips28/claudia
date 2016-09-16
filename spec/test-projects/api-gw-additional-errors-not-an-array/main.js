/*global exports*/
exports.apiConfig = function () {
	'use strict';
	return {
		version: 2,
		routes: { echo: { 'GET': { error: { additionalErrors: 'no-array' } } } }
	};
};
exports.router = function (event, context) {
	'use strict';
	context.succeed(event);
};
