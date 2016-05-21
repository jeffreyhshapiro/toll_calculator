//var tollCalculator = angular.module('tollCalculator');
angular.module('tollCalculator', ['ui.router']);

angular.module('tollCalculator').config( function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise("/"); //provide for routes that don't exist


   //use stateProvider to template our routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/partials/search.html',
      controller: 'searchController'
    });



    //$locationProvider.html5Mode(true);
});
