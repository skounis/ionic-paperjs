(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'Marque',
			path: 'canvas-marque',
			icon: 'ion-edit'
		}, {
			title: 'Move',
			path: 'canvas-move',
			icon: 'ion-edit'
		}, {
			title: 'Canvas 3',
			path: 'canvas',
			icon: 'ion-edit'
		}, {
			title: 'Canvas 4',
			path: 'canvas',
			icon: 'ion-edit'
		}];

		return data;
	}
})();
