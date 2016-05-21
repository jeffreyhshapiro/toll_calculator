//controller for searching

angular.module('tollCalculator')
  .controller('searchController', function($scope, $http){
    $scope.searchQuerySubmit = function(){
      var origin = $scope.origin;
      var destination = $scope.destination;
      console.log(origin)
      console.log(destination)
      $http.get('/search').then(function() {
        var directionsQuery = "https://maps.googleapis.com/maps/api/directions/json?origin="+ origin + "&destination="+ destination + "&key=AIzaSyA-nftHnip6wJ1zX_SoBfmmhZmynfvk-u0";
      })
    }
})
