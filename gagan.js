var myApp = angular.module('gaganModel',['ngResource', 'ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/'),{
        templateUrl : '',
        controller:''
        
    }
    .when('/api/v1/products'),{}
    
})

myApp.controller('firstController', ['$timeout', '$scope',function($timeout, $scope) {
    $scope.input = '';
    $scope.result = true;
    
    $timeout(function() {
       $scope.result = false; 
    }, 3000);
}]);

myApp.controller('secondController', ['$timeout', '$scope',function($timeout, $scope) {
    $scope.input = '';
    $scope.$watch('input', function(newValue, oldValue) {
        console.log('Old : ' + oldValue);
        console.log('New :' + newValue);
    });
}]);

myApp.controller('thirdController', ['$timeout', '$scope',function($timeout, $scope) {
 $scope.friends = ['Gagan','Aashish', 'Harman', 'Ankit']
}]);

myApp.controller('fourthController', ['$timeout', '$scope',function($timeout, $scope) {
    
}]);
