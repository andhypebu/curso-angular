'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('angular', {
<<<<<<< HEAD
        parent: 'list',
        url: '/angular',
        templateUrl: 'app/main/list/angular/angular.html',
        controller: 'AngularCtrl as vmAngular'
=======
          parent: 'list',
          url: '/angular',
          templateUrl: 'app/main/list/angular/angular.html',
          controller: 'AngularCtrl as vmAngular'
>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
      });
  });
