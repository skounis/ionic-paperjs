(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['menuItems', 'homeDataService'];

	/* @ngInject */
	function HomeController(menuItems, homeDataService) {
		var vm = angular.extend(this, {
			entries: menuItems,
		});

	}
})();
