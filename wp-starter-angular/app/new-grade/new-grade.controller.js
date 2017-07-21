/**
 * Created by Bojan on 7/13/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('NewGradeController', NewGradeController);

  NewGradeController.$inject = ['$log', 'NewGradeService', 'ProfessorService', 'GroupService', 'StudentService'];

  /* @ngInject */
  function NewGradeController($log, NewGradeService, ProfessorService, GroupService, StudentService) {
    var vm = this;
    vm.title = 'Enter new grade';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.entity = {};

    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.professors = [];
    vm.groups = [];
    vm.students = [];
    vm.uiState = {
      professors:{
        loadGif: true,
        showProfessors: false
      },
      students:{
        loadGif: true,
        showStudents: false
      },
      groups:{
        loadGif: true,
        showGroups: false
      }
    }
    loadProfessors();
    loadGroups();
    loadStudents();

    function loadStudents() {
      StudentService.getAll().then(function (data) {
        vm.students = data;

        vm.uiState.students.loadGif = false;
        vm.uiState.students.showStudents = true;
      })
    }

    function loadProfessors() {
      //debugger;
      //controller
      ProfessorService.getAll().then(function (data) {
        vm.professors = data;

        vm.uiState.professors.loadGif = false
        vm.uiState.professors.showProfessors = true;
      });
    }

    function loadGroups() {
      //debugger;
      GroupService.getAll().then(function (data) {
        vm.groups = data;

        vm.uiState.groups.loadGif = false;
        vm.uiState.groups.showGroups = true;
      });
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;
      var promise = NewGradeService.save(vm.entity);

      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        $log.debug(vm.entity.name);
        //loadProfessors();
        vm.saveOkMsg = "Grade with id " + data.id + " is saved";
        clear();
      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }
    }

    function clear() {
      vm.entity = {};
    }

    function edit(entity) {
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      NewGradeService
        .remove(entity)
        .then(function () {
          loadProfessors();
        });
    }

  }

})(angular);
