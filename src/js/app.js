var app = angular.module('movieApp', []);


app.controller('movieController', ['$scope', 'movieSearchService', function($scope, movieSearchService) {

  $scope.title = '';
  $scope.search = function() {
    // console.log('title:', $scope.title);
    movieSearchService.getMovies($scope.title)
    .then(function(data) {
      // if (data.error) {
      //   $scope.error = data.error;
      // }
      $scope.movies = data.data.Search;
      if ($scope.movies === undefined) {
        $scope.movies = "No Results!";
      }
      console.log(data.data.Search[0]);
    })
  }
  $scope.showMe = false;
}]);

app.service('movieSearchService', ['$http', function ($http) {

  return {
    getMovies: function (title) {
      // console.log(title);
      return $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s='+title,
      })
    }
  }
}]);
