(function() {
	'use strict';

	angular
		.module('supermodular.canvasmove')
		.controller('CanvasMoveController', CanvasMoveController);

	CanvasMoveController.$inject = ['$scope', '$rootScope','canvasMoveService'];

	/* @ngInject */
	function CanvasMoveController($scope, $rootScope, canvasMoveService) {
		var vm = angular.extend(this, {
			tool: null,
			project: null,
			segment: null,
			path: null,
			movePath: false,
			values: null,
			hitOptions: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasMove');
			var textItem = new PointText({
				content: 'Click and drag to select with move.',
				point: new Point(20, 30),
				fillColor: 'black',
			});

			// Empty the tools
			// paper.tools = [];
			// vm.tool = new Tool();
			initTool();
			vm.tool = $rootScope.tool;

			vm.project = paper.project;

			vm.values = {
				paths: 50,
				minPoints: 5,
				maxPoints: 15,
				minRadius: 30,
				maxRadius: 90
			};

			vm.hitOptions = {
				segments: true,
				stroke: true,
				fill: true,
				tolerance: 5
			};

			createPaths();

			// Define a mousedown and mousedrag handler
			vm.tool.onMouseDown 	= onMouseDown;
			vm.tool.onMouseDrag 	= onMouseDrag;
			vm.tool.onMouseMove   = onMouseMove;
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

		function createPaths() {
			var radiusDelta = vm.values.maxRadius - vm.values.minRadius;
			var pointsDelta = vm.values.maxPoints - vm.values.minPoints;

			for (var i = 0; i < vm.values.paths; i++) {
				var radius = vm.values.minRadius + Math.random() * radiusDelta;
				var points = vm.values.minPoints + Math.floor(Math.random() * pointsDelta);
				var p = Point.random();
				p.x = p.x * paper.view.size.width;
				p.y = p.y * paper.view.size.height;
				// var path = createBlob(paper.view.size * Point.random(), radius, points);
				var path = createBlob(p, radius, points);
				var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
				var hue = Math.random() * 360;
				path.fillColor = { hue: hue, saturation: 1, lightness: lightness };
				path.strokeColor = 'black';
			};
		}

		function createBlob(center, maxRadius, points) {
			var path = new Path();
			path.closed = true;
			for (var i = 0; i < points; i++) {
				var delta = new Point({
					length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
					angle: (360 / points) * i
				});
				// path.add(center + delta);
				var p = new Point(center.x + delta.x, center.y + delta.y)
				path.add(p);
			}
			path.smooth();
			return path;
		}

		function onMouseDown(event) {
			vm.segment = vm.path = null;
			var hitResult = project.hitTest(event.point, vm.hitOptions);
			if (!hitResult)
				return;

			if (event.modifiers.shift) {
				if (hitResult.type == 'segment') {
					hitResult.segment.remove();
				};
				return;
			}

			if (hitResult) {
				vm.path = hitResult.item;
				if (hitResult.type == 'segment') {
					vm.segment = hitResult.segment;
				} else if (hitResult.type == 'stroke') {
					var location = hitResult.location;
					vm.segment = vm.path.insert(location.index + 1, event.point);
					path.smooth();
				}
			}
			vm.movePath = hitResult.type == 'fill';
			if (vm.movePath)
				project.activeLayer.addChild(hitResult.item);
		}

		function onMouseMove(event) {
			vm.project.activeLayer.selected = false;
			if (event.item)
				event.item.selected = true;
		}

		function onMouseDrag(event) {
			if (vm.segment) {
				vm.segment.point.x = vm.segment.point.x  + event.delta.x;
				vm.segment.point.y = vm.segment.point.y  + event.delta.y;

				vm.path.smooth();
				console.log('segment point:', vm.segment.point);
			} else if (vm.path) {
				// vm.path.position += event.delta;
				vm.path.position.x =  vm.path.position.x + event.delta.x;
				vm.path.position.y =  vm.path.position.y + event.delta.y;
				console.log('path position:', vm.path.position);
			}
		}


		// When the mouse is released, we simplify the path:
		function onMouseUp(event) {

		}
	}
})();
