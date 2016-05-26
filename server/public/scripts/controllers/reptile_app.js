myApp.controller('ReptileController', ['$scope', '$http', function($scope, $http) {
  var key = '7a407777e9ad874499e799cacb8a61ac';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomReptile = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=reptile';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        // $scope.getBreeds();
      }
    )
  }

  // $scope.getBreeds = function() {
  //   var query = 'breed.list';
  //   query += '?key=' + key;
  //   query += '&animal=' + $scope.breed.toLowerCase();
  //   query += '&format=json';
  //
  //   var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
  //
  //   console.log(request);
  //
  //   $http.jsonp(request).then(
  //     function(response) {
  //       console.log('breeds: ', response.data);
  //       $scope.breeds = response.data.petfinder.breeds.breed;
  //     }
  //   )
  // }

}]);
