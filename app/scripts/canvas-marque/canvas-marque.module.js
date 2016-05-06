(function() {
	'use strict';

	angular
		.module('supermodular.canvasmarque', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas-marque', {
				url: '/canvas-marque',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-marque/canvas-marque.html',
						controller: 'CanvasMarqueController as vm'
					}
				}
			});
		});
})();
