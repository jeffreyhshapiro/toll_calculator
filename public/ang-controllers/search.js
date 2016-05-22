//controller for searching

angular.module('tollCalculator')
  .controller('searchController', function($scope, $http){

    $scope.searchQuerySubmit = function(){
      var origin = $scope.origin;
      var destination = $scope.destination;
      console.log(origin)
      console.log(destination)
      $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='  + origin + '&key=AIzaSyA-nftHnip6wJ1zX_SoBfmmhZmynfvk-u0').then(function(data) {
        console.log(data)
      })
    }
})
