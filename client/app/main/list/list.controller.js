'use strict';

angular.module('uiApp')
<<<<<<< HEAD
  .controller('ListCtrl', function ($state) {
    var vm = this;
    vm.tabs = [
      {index: 0,
       title:'Angular',
      state:'angular',},
      {index: 1,
       title:'Java',
      state:'java',}
    ];
    vm.select = select;
    function select(index){
$state.go(vm.tabs[index].state)
    }
  });
=======
    .controller('ListCtrl', function ($state, lodash) {
        var vm = this;
        vm.tabs = [
            {
                index: 0,
                title: 'Angular',
                state: 'angular',
                active: true
            },
            {
                index: 1,
                title: 'Java',
                state: 'java',
                active: false
            }
        ];
        vm.default = vm.tabs[0];
        vm.select = select;

        activate();

        function activate() {
            var current = lodash.find(vm.tabs, function (tab) {
                return tab.state === $state.current.name;
            });

            select(current ? current.index : vm.default.index);
        }

        function select(index) {
            vm.selected = vm.tabs[index];
            $state.go(vm.selected.state);
        }
    });
>>>>>>> c7378431224d7e3c55badb1a36fddebdd28eba36
