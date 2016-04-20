/**
 * Created by leon on 16/4/19.
 */

'use strict';

/**
 * @ngdoc overview
 * @name ZrsmWorker
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('ZrsmWorker', ['ionic', 'ngCordova', 'ngResource'])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'src/appContainer/appContainer.html'
      })

      // 登录
      .state('login', {
        url: '/login',
        templateUrl: 'src/login/login.html',
        controller: 'loginCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });



