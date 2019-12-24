var myApp= angular.module("myApp",[]);
myApp.controller("myController",['$scope','$window',function($scope,$window){
    $scope.custom = true;   
    $scope.basicCall= function(custom){
        if(custom==true)
            $window.alert('Monthly Basic plan details');
        else
            $window.alert('Annual Basic plan details');
    }
    $scope.professionalCall= function(custom){
        if(custom==true)
            $window.alert('Monthly Professional plan details');
        else
            $window.alert('Annual Professional plan details');
    }
    $scope.masterCall= function(custom){
        if(custom==true)
            $window.alert('Monthly Master plan details');
        else
            $window.alert('Annual Master plan details');
    }
}]);
