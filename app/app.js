'use strict';

var turnConsultancy = angular.module('turnConsultancy', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html'}).
            when('/what_we_can_do', {templateUrl: 'partials/what_we_can_do.html'}).
            when('/new_product_development', {templateUrl: 'partials/new_product_development.html'}).
            when('/new_product_introduction', {templateUrl: 'partials/new_product_introduction.html'}).
            when('/business_process_analysis', {templateUrl: 'partials/business_process_analysis.html'}).
            when('/lean_six_sigma', {templateUrl: 'partials/lean_six_sigma.html'}).
            when('/design_for_environment', {templateUrl: 'partials/design_for_environment.html'}).
            when('/strategic_procurement', {templateUrl: 'partials/strategic_procurement.html'}).
            when('/about', {templateUrl: 'partials/about.html'}).
            otherwise({redirectTo: '/home'});
		}
	]);