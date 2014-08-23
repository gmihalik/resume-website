{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":12}},"text":"// script.js"},{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":71,"column":0}},"lines":["","\t// create the module and name it myApp","        // also include ngRoute for all our routing needs","\tvar myApp = angular.module('myApp', ['ngRoute']);","","\t// configure our routes","\tmyApp.config(function($routeProvider) {","\t\t$routeProvider","","\t\t\t// route for the home page","\t\t\t.when('/', {","\t\t\t\ttemplateUrl : 'views/home.html',","\t\t\t\tcontroller  : 'mainController'","\t\t\t})","","\t\t\t// route for the about page","\t\t\t.when('/education', {","\t\t\t\ttemplateUrl : 'views/education.html',","\t\t\t\tcontroller  : 'educationController'","\t\t\t})","\t\t\t","\t\t\t.when('/industry', {","\t\t\t\ttemplateUrl : 'views/industry.html',","\t\t\t\tcontroller  : 'industryController'","\t\t\t})","\t\t\t","\t\t\t.when('/photos', {","\t\t\t\ttemplateUrl : 'views/photos.html',","\t\t\t\tcontroller  : 'photosController'","\t\t\t})","","\t\t\t.when('/portfolio', {","\t\t\t\ttemplateUrl : 'views/portfolio.html',","\t\t\t\tcontroller  : 'portfolioController'","\t\t\t})","","\t\t\t// route for the contact page","\t\t\t.when('/contact', {","\t\t\t\ttemplateUrl : 'views/contact.html',","\t\t\t\tcontroller  : 'contactController'","\t\t\t});","\t});","","\t// create the controller and inject Angular's $scope","\tmyApp.controller('mainController', function($scope) {","\t\t// create a message to display in our view","\t\t$scope.message = 'Welcome Home';","\t});","","\tmyApp.controller('educationController', function($scope) {","\t\t$scope.message = 'Look! I am an about page.';","\t});","\t","\tmyApp.controller('portfolioController', function($scope) {","\t\t$scope.message = 'This is for the wedding party.';","\t});","\t","\tmyApp.controller('industryController', function($scope) {","\t\t$scope.message = 'Before, during, or even after the \\","\t\tcelebrations, while you are capturing the memories don\\'t \\","\t\tforget to #HutchihalikWedding!';","\t});","","\tmyApp.controller('festivitiesController', function($scope) {","\t\t$scope.message = 'Look! I am a festivities page.';","\t});","\t","\tmyApp.controller('contactController', function($scope) {","\t\t$scope.message = 'If you have any questions, comments, or \\","\t\tconcerns contact us immediately @ gregory.mihalik@gmail.com';"]},{"action":"insertText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":4}},"text":"\t});"}]}]]},"ace":{"folds":[],"scrolltop":640,"scrollleft":0,"selection":{"start":{"row":71,"column":4},"end":{"row":71,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":41,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1408759979756,"hash":"8486d0e660db9208b38fe531ab271d79340dab70"}