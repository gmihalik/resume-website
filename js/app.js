// script.js

	// create the module and name it myApp
        // also include ngRoute for all our routing needs
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/education', {
				templateUrl : 'views/education.html',
				controller  : 'educationController'
			})
			
			.when('/industry', {
				templateUrl : 'views/industry.html',
				controller  : 'industryController'
			})
			
			.when('/research', {
				templateUrl : 'views/research.html',
				controller  : 'researchController'
			})

			.when('/portfolio', {
				templateUrl : 'views/portfolio.html',
				controller  : 'portfolioController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome Home';
	});

	myApp.controller('educationController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
	
	myApp.controller('portfolioController', function($scope) {
		$scope.message = 'This is for the wedding party.';
	});
	
	myApp.controller('industryController', function($scope) {
		$scope.message = 'Before, during, or even after the \
		celebrations, while you are capturing the memories don\'t \
		forget to #HutchihalikWedding!';
	});

	myApp.controller('researchController', function($scope) {
		$scope.message = 'Look! I am a festivities page.';
	});
	
	myApp.controller('contactController', function($scope) {
		$scope.message = 'If you have any questions, comments, or \
		concerns contact us immediately @ gregory.mihalik@gmail.com';
	});