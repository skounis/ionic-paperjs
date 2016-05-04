(function() {
	'use strict';

	angular
		.module('supermodular.canvas', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas', {
				url: '/canvas',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas/canvas.html',
						controller: 'CanvasController as vm'
					}
				}
			});
		});
})();
