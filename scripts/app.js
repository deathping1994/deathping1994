'use strict';

/**
 * @ngdoc overview
 * @name deathping1994githubioApp
 * @description
 * # deathping1994githubioApp
 *
 * Main module of the application.
 */
angular
  .module('deathping1994githubioApp', [
    'ngRoute'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl',
        controllerAs: 'skills'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        // controller: 'AboutCtrl',
        // controllerAs: 'about'
      })
      .when('/kidding', {
        templateUrl: 'views/kidding.html',
        // controller: 'AboutCtrl',
        // controllerAs: 'about'
      })
      .when('/hiring', {
        templateUrl: 'views/hire.html',
        // controller: 'AboutCtrl',
        // controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectCtrl'
        // controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
