var tollCalculator = angular.module("toll-calculator", ['searchController']);

tollCalculator.config( function($stateProvider, ['ui.router']){
  $urlRouterProvider.otherwise("/"); //provide for routes that don't exist


   //use stateProvider to template our routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/search.html',
      //controller: 'mainController'
    });



    //$locationProvider.html5Mode(true);
});
