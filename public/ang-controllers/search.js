//controller for searching

angular.module('tollCalculator')
  .controller('searchController', function($scope, $http){
    $scope.searchQuerySubmit = function(){
      var origin = $scope.origin;
      var destination = $scope.destination;
      console.log($scope.origin)
      console.log($scope.destination)
  }



console.log("process.env.tollKey: "+ process.env.tollKey)

  // $http.get('/search').then(function() {
  //   var directionsQuery = "https://maps.googleapis.com/maps/api/directions/json?origin="+ origin + "&destination="+ destination + "&key=" + process.env.tollKey;
  // })
})
