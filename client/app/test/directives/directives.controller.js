'use strict';

angular.module('uiApp')
  .controller('DirectivesCtrl', function ($filter) {
    var vm = this;

    vm.message = 'success';
    // vm.showMenu = true;
    vm.show = true;
    vm.showMenu = function () {
      vm.show = !vm.show;
      return vm.show;
    };
<<<<<<< HEAD
    vm.user = {
      access:'admin'
    };
    vm.getAccess = function(){
      return vm.message;
    }
    vm.timeNow = new Date();

    vm.myObject = {
      name: 'Jorge',
      lastName: 'Perez',
      edad:'23'
    };
    vm.price = 50;
    vm.users = ['bob', 'sean', 'rocky', 'john','mateo','marcos','lucas','diego','lucia','ana','camila','daniel','maria']

    vm.filtered = $filter('myFilter')(vm.message,'M');
    vm.dateFiltered = $filter('date')(vm.timeNow, 'dd-MM-yyyy HH:mm:ss','+0400');
=======

    vm.user = {
      access: 'admin'
    };

    vm.getAccess = function () {
      return vm.message;
    }

    vm.timeNow = new Date();
    vm.myObject = {
      name: 'Juan',
      age: 25
    };

    vm.price = 50;
    vm.filtered =
      $filter('myFilter')(vm.message, 'M');
    vm.dateFiltered =
      $filter('date')(vm.timeNow,
        'dd-MMMM-yyyy HH:mm:ss',
        '+0400');


>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
  });
