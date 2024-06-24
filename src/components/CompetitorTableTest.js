simpleApp.controller('aboutController', function($scope, $http) {
    $http.get('data.json').then(function(response) {
     $scope.data = response.data;
    });
    
  });