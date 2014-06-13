var zpzkApp = angular.module("zpzkApp", ['ngRoute','ngAnimate','ngTouch','angular-carousel']);


zpzkApp.config(function($routeProvider) {
    $routeProvider
    .when('/Promos', {
        templateUrl: 'partials/promo-list.html',
        controller: 'PromoListCtrl'
    })
    .when('/Prds', {
        templateUrl: 'partials/prd-list.html',
        controller: 'PrdListCtrl'
    })
    .otherwise({
        redirectTo: '/Promos'
    });
});



zpzkApp.service('dataService', function($http, $route) {
    this.getAllPromos = function() {
        return $http.get('data/promos.json', {
            'cache': true
        });
    };

    this.getAllPrds = function(){
        return $http.get('data/prds.json',{
            'cache':true
        });
    };


});


// zpzkApp.controller('PromoListCtrl', function ($scope, $http){
// 	$http.get('data/promos.json').success(function(data) {
//   		$scope.promos = data;
// 	});
// });




zpzkApp.controller('PromoListCtrl', function($scope, dataService, $routeParams) {
	 $scope.title = "力荐活动";

  dataService.getAllPromos().success(function(data){
		$scope.promos = data;
    console.log(' enen'+$routeParams);
	});

  $('footer li').removeClass('active');
  $('footer li:first-child').addClass('active');
	
});

zpzkApp.controller('PrdListCtrl', function($scope, dataService){
  $scope.title = "超值单品";
  $scope.onViewLoad = function(){
    console.log('view changed.');
  }

  dataService.getAllPrds().success(function(data){
    $scope.prds = data;
  });

  $('footer li').removeClass('active');
  $('footer li:last-child').addClass('active');

});

