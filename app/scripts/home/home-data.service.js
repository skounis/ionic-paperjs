(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('homeDataService', homeDataService);

	homeDataService.$inject = [];

	/* @ngInject */
	function homeDataService() {
		return { };
	}
})();
