/**
 * Created by Bojan on 7/16/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('ProfessorGradesController', ProfessorGradesController);

  ProfessorGradesController.$inject = ['$log', 'ProfessorGradesService', 'ProfessorService'];

  /* @ngInject */
  function ProfessorGradesController($log, ProfessorGradesService, ProfessorService) {
    var vm = this;
    vm.title = 'Professor grades';

    vm.getGrades = getGrades;
    vm.professorEntity = null;
    vm.professorGrades = [];
    vm.professorEntities = [];

    // vm.saveOkMsg = null;
    // vm.saveErrMsg = null;
    // vm.LabGroups = [];





    loadProfessors();

    function loadProfessors() {
      ProfessorService.getAll().then(function (data) {
        vm.professorEntities = data;
      });
    }


    function getGrades(){
      ProfessorGradesService.professorGrades(vm.professorEntity.id).then(function (data) {
        vm.professorGrades = data;
      })
    }

  }

})(angular);
