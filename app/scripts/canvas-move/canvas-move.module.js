(function() {
	'use strict';

	angular
		.module('supermodular.canvasmove', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvasMove', {
				url: '/canvas-move',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-move/canvas-move.html',
						controller: 'CanvasMoveController as vm'
					}
				}
			});
		});
})();
