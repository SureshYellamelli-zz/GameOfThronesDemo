/// <reference path="../Scripts/angular.js" />

var app = angular.module('customersApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: '/app/partials/main.html'
        })
        //Define a route that has a route parameter in it (:customerID)
        .when('/detailinfo/:requestID', {
            controller: 'DetailsController',
            templateUrl: '/app/partials/details.html'
        })
        .otherwise({ templateUrl: ''});
});