angular.module('starter', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.customers = [
    {
        name : 'John',
        address : 'GreenStreet 2th'
    },{
        name : 'Master',
        address : 'Yellow 23th'
    },{
        name : 'Dawid',
        address : 'SilverStreet 22th'
    },{
        name : 'Mateusz',
        address : 'BlackStreet 123th'
    }
  ];
}])
.controller('Controller2', ['$scope', function($scope) {
  $scope.customers = [
    {
        name : 'Tomasz',
        address : 'Wojskowa 12'
    },{
        name : 'Michal',
        address : 'Dluga 122'
    }
  ];
}])
.directive('myCustomer', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directive/my-customer.html'
  };
})
.controller('Controller3', ['$scope', function ($scope) {
    $scope.customers = [
    {
        name : 'Pawel',
        address : 'Slowackiego 1'
    },{
        name : 'Adam',
        address : 'Mickiewicza 21'
    },{
        name : 'Przemek',
        address : 'Szymborskiej 8'
    }
  ];
}])
.directive('myCustomer', function () {
    return {
        restrict : 'A',
        template : '<ul>' 
                    + '<li ng-repeat="customer in customers"> '
                    + 'name : {{ customer.name }}' 
                    + '<br />address : {{ customer.address }}</li>' 
                    + '</ul>'
    };
});
