/**
 * Created by Bojan on 7/10/2017.
 */

(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('professorSelect', {
      templateUrl: 'app/components/professor-select/professor-select-component.view.html',
      bindings: {
        gsModel: "="
      },
      controller: ProfessorSelectComponent

    });
  ProfessorSelectComponent.$inject = ['$attrs', 'ProfessorService'];
  function ProfessorSelectComponent($attrs, ProfessorService){
    var vm = this;
    vm.professors = [];
    ProfessorService.getAll().then(function(data){
      vm.professors = data;
    });


  };
})();
