(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Canvas',
			path: 'canvas',
			icon: 'ion-edit'
		}, {
			title: 'Canvas 2',
			path: 'canvas',
			icon: 'ion-social-wordpress'
		}, {
			title: 'Canvas 3',
			path: 'canvas',
			icon: 'ion-android-checkbox-outline'
		}, {
			title: 'Canvas 4',
			path: 'canvas',
			icon: 'ion-map'
		}];

		return data;
	}
})();
