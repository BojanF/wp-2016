/**
 * Created by Bojan on 7/13/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('StudentGradesController', StudentGradesController);

  StudentGradesController.$inject = ['$log', 'StudentGradesService', 'StudentService'];

  /* @ngInject */
  function StudentGradesController($log, StudentGradesService, StudentService) {
    var vm = this;
    vm.title = 'Student grades';

    vm.getGrades = getGrades;
    vm.studentEntity = null;
    vm.studentGrades = [];
    vm.studentEntities = [];

    // vm.saveOkMsg = null;
    // vm.saveErrMsg = null;
    // vm.LabGroups = [];





    loadStudents();

    function loadStudents() {
      StudentService.getAll().then(function (data) {
        vm.studentEntities = data;
      });
    }


    function getGrades(){
      StudentGradesService.studentGrades(vm.studentEntity.id).then(function (data) {
        vm.studentGrades = data;
      })
    }

  }

})(angular);

