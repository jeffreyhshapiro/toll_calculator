//controller for searching
var searchController = angular.module('searchController')
searchController.controller('searchController', function($scope){
  console.log($scope.origin)
  console.log($scope.destination)
  var origin = $scope.origin;
  var destination = $scope.destination;
  $http.get('/search').then(function() {
    var directionsQuery = "https://maps.googleapis.com/maps/api/directions/json?origin="+ origin + "&destination="+ destination + "&key=" + process.env.tollKey;
  })
})
