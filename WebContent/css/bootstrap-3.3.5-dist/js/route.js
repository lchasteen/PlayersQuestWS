// route.js

    // create the module and name it routApp
    // also include ngRoute for all our routing needs
    var routeApp = angular.module('routeApp', ['ui.bootstrap','ngRoute']);

    // configure our routes
    routeApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	//routeApp.config(["$routeProvider", function($routeProvider) {
		//$locationProvider.html5Mode(true);
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : './pages/home.html'
            })
			
			// route for the resume page
            .when('/resume', {
                templateUrl : './pages/resume.html'
                
            })

            // route for the portfolio page
            .when('/portfolio', {
                templateUrl : './pages/portfolio.html'  
            })
			
			 // route for the portfolio page
            .when('/portfolio/:params', {
				templateUrl : './pages/portfolio.php',
				controller: 'PortfolioController'
                
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : './pages/contact.html'
			//})
			
			//.otherwise({
			//	redirectTo: '/portfolio/'
                
			});
			
			// use the HTML5 History API
			$locationProvider.html5Mode(true);
    }]);
	
	
	//var app = angular.module('myApp', []);
	routeApp.controller('HomeController', function($scope, $http) {
		$http.get("./data/home-data.php")
		.success(function(response) {$scope.names = response.records;});
		
	});

    // create the controller and inject Angular's $scope
    routeApp.controller('MainController', function($scope) {			
    });
	
	// create the controller and inject Angular's $scope
    routeApp.controller('PortfolioController', function($scope) {			
    });
	
	/*routApp.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

		$scope.items = ['item1', 'item2', 'item3'];

		$scope.animationsEnabled = true;

	  $scope.open = function (size) {

			var modalInstance = $modal.open({
			  animation: $scope.animationsEnabled,
			  templateUrl: 'myModalContent.html',
			  controller: 'ModalInstanceCtrl',
			  size: size,
			  resolve: {
				items: function () {
				  return $scope.items;
				}
			  }
			});
	
	routApp.controller('contactController', function($scope) {
		$scope.master = {firstName: "John", lastName: "Doe"};
		$scope.reset = function() {
			$scope.user = angular.copy($scope.master);
		};
    $scope.reset();
});*/
	
	