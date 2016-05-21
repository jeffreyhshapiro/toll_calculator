var tollCalculator = angular.module("tollCalculator", ['searchController']);

tollCalculator.config( function($stateProvider, ['ui.router']){
  $urlRouterProvider.otherwise("/"); //provide for routes that don't exist


   //use stateProvider to template our routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      //controller: 'mainController'
    });




    //$locationProvider.html5Mode(true);
});
