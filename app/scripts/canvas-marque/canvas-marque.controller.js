(function() {
	'use strict';

	angular
		.module('supermodular.canvasmarque')
		.controller('CanvasMarqueController', CanvasMarqueController);

	CanvasMarqueController.$inject = ['$scope', '$rootScope', 'canvasMarqueService'];

	/* @ngInject */
	function CanvasMarqueController($scope, $rootScope, canvasMarqueService) {
		var vm = angular.extend(this, {
			path: null,
			rect: null,
			startPoint: null,
			rectShape: null,
			tool: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
			rects: [],
			shapes: [],
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasMarque');
			var textItem = new PointText({
				content: 'Click and drag to select with marque.',
				point: new Point(20, 30),
				fillColor: 'black',
			});

			// Sample draws
			drawSampleRects();

			// Empty the tools
			// paper.tools = [];
			// vm.tool = new Tool();
			initTool();
			vm.tool = $rootScope.tool;

			// Define a mousedown and mousedrag handler
			vm.tool.onMouseDown 	= onMouseDown;
			vm.tool.onMouseDrag 	= onMouseDrag;
			vm.tool.onMouseUp 		= onMouseUp;

			paper.view.update();
    } // initPaper

		function initTool(){
			if (!$rootScope.tool){
				$rootScope.tool = new Tool();
			}else {
				!$rootScope.tool.remove();
				$rootScope.tool = new Tool();
			}
		}

		function resetShapes(){
			for (var i in vm.shapes) {
					vm.shapes[i].strokeColor = 'green';
			}
		}

		function drawRect(startPoint, endPoint){
			var rect = new Rectangle(startPoint, endPoint);
			vm.rects.push(rect);
			var rectShape = new Shape.Rectangle(rect);
			rectShape.strokeColor = 'green';
			vm.shapes.push(rectShape);
		}

		function drawSampleRects(){
			var start = new Point(10, 50);
			var end = new Point(150, 100);
			drawRect(start, end);

			start = new Point(paper.view.size.width / 2, 150);
			end = new Point(paper.view.size.width / 2 + 150, 250);
			drawRect(start, end);

			start = new Point(paper.view.size.width / 2 - 100, 350);
			end = new Point(paper.view.size.width - 50, 450);
			drawRect(start, end);

			console.log();
		}

		function onMouseDown(event) {
			vm.startPoint = event.point;
			resetShapes();
		}

		// While the user drags the mouse, points are added to the path
		// at the position of the mouse:
		function onMouseDrag(event) {

			if (vm.rectShape){
				vm.rectShape.remove();
			}

			vm.rect = new Rectangle(vm.startPoint, event.point);
			vm.rectShape = new Shape.Rectangle(vm.rect);
			vm.rectShape.strokeColor = 'black';
		}

		// When the mouse is released, we simplify the path:
		function onMouseUp(event) {
			// alert('Select area: ' + JSON.stringify(vm.rect));
			for (var i in vm.rects) {
				if (vm.rect.intersects(vm.rects[i])){
					vm.shapes[i].strokeColor = 'red';
					// alert('Intersects with: ' + JSON.stringify(vm.rects[i]));
					console.log('Intersects with: ', vm.rects[i]);
				}
			}
			console.log(vm.rect);
		}

	}
})();
