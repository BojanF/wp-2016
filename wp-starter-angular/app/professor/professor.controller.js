/**
 * Created by Bojan on 7/7/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('ProfessorController', ProfessorController);

  ProfessorController.$inject = ['$log', 'ProfessorService', 'CourseService'];

  /* @ngInject */
  function ProfessorController($log, ProfessorService, CourseService) {
    var vm = this;
    vm.title = 'Professor';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.addCourse = addCourse;
    vm.newCourses = [];
    vm.entity = {};
    vm.professorEntities = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.coursesShow = false;
    vm.courses = [];
    vm.uiState = {
      professors: {
        loadGif: true,
        showProfessorsTable: false,
        showNoProfessorsPanel: false
      },
      courses:{
        loadGif: true,
        showCoursesMenu: false,
        showNoCoursesPanel: false
      }
    }
    loadProfessors();
    loadCourses();

    function loadProfessors() {
      //debugger;
      //controller
      ProfessorService.getAll().then(function (data) {
        vm.professorEntities = data;

        vm.uiState.professors.loadGif = false;
        if(vm.professorEntities.length > 0){
          vm.uiState.professors.showProfessorsTable = true;
          vm.uiState.professors.showNoProfessorsPanel = false;
        }
        else{
          vm.uiState.professors.showProfessorsTable = false;
          vm.uiState.professors.showNoProfessorsPanel = true;
        }

      });
    }

    function loadCourses() {
      //debugger;
      CourseService.getAll().then(function (data) {
        vm.courses = data;

        vm.uiState.courses.loadGif = false;
        if(vm.courses.length > 0){
          vm.uiState.courses.showCoursesMenu = true;
          vm.uiState.courses.showNoCoursesPanel = false;
        }
        else{
          vm.uiState.courses.showCoursesMenu = false;
          vm.uiState.courses.showNoCoursesPanel = true;
        }
      });
    }

    function save() {
      vm.uiState.professors.loadGif = true;
      vm.uiState.professors.showNoProfessorsPanel = false;
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;
      vm.coursesShow = false;

      addCourse();

      var promise = ProfessorService.save(vm.entity);

      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        $log.debug(vm.entity.name);
        loadProfessors();
        vm.saveOkMsg = "Professor with id " + data.id + " is saved";
        clear();
      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }
    }

    function clear() {
      vm.coursesShow = false;
      vm.entity = {};
    }

    function edit(entity) {
      vm.entity = {};
      vm.coursesShow = true;
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      vm.uiState.professors.loadGif = true;
      ProfessorService
        .remove(entity)
        .then(function () {
          loadProfessors();
        });
    }

    function addCourse(){
      if(vm.entity.courses == undefined)
        vm.entity.courses = [];
      for(var i=0 ; i<vm.newCourses.length ; i++) {
        vm.entity.courses.push(vm.newCourses[i]);
      }
      vm.newCourses = [];
    }
  }

})(angular);
