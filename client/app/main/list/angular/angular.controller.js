'use strict';

angular.module('uiApp')
<<<<<<< HEAD
  .controller('AngularCtrl', function (NgTableParams) {
    var vm = this;
    var data = [{name: "Moroni", age: 50} ,{name: "Perez", age: 70},{name: "Sanchez", age: 45},{name: "Gonzales", age: 85},{name: "Andia", age: 42}];
vm.tableParams = new NgTableParams({}, { dataset: data});

  });
=======
    .controller('AngularCtrl', function (NgTableParams) {
        var vm = this;
        var data = [
            {
                name: 'Juan',
                age: 25
            },
            {
                name: 'maria',
                age: 26
            }
        ];

        vm.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: data
        });
    });
>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
