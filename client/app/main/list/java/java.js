'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('java', {
<<<<<<< HEAD
        parent: 'list',
        url: '/java',
        templateUrl: 'app/main/list/java/java.html',
        controller: 'JavaCtrl as vmJava'
=======
          parent: 'list',
          url: '/java',
          templateUrl: 'app/main/list/java/java.html',
          controller: 'JavaCtrl as vmJava'
>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
      });
  });
