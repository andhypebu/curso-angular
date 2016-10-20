'use strict';

angular.module('uiApp')
<<<<<<< HEAD
  .config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        parent:'main',
        url: 'list',
        templateUrl: 'app/main/list/list.html',
        controller: 'ListCtrl as vmList'
      });
  });
=======
    .config(function ($stateProvider) {
        $stateProvider
            .state('list', {
                parent: 'main',
                url: 'list',
                templateUrl: 'app/main/list/list.html',
                controller: 'ListCtrl as vmList'
            });
    });
>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
