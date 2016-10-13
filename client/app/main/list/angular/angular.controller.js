'use strict';

angular.module('uiApp')
  .controller('AngularCtrl', function (NgTableParams) {
    var vm = this;
    var data = [{name: "Moroni", age: 50} ,{name: "Perez", age: 70},{name: "Sanchez", age: 45},{name: "Gonzales", age: 85},{name: "Andia", age: 42}];
vm.tableParams = new NgTableParams({}, { dataset: data});

  });
