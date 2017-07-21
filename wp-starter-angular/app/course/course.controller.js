/**
 * Created by Bojan on 7/8/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('CourseController', CourseController);

  CourseController.$inject = ['$log', 'CourseService', 'ProfessorService'];

  /* @ngInject */
  function CourseController($log, CourseService, ProfessorService) {
    var vm = this;
    vm.title = 'Course';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.entity = {};
    vm.courseEntities = [];
    vm.professors = [];
    vm.selectedProfessors = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.uiState = {
      courses: {
        loadGif: true,
        showCourses: false,
        showNoCoursesPanel: false,
      },
      professors:{
        loadGif: true,
        showProfessors: false,
        showNoProfessorsPanel: false
      }
    }
    loadCourses();
    loadProfessors();

    function loadCourses() {
      //debugger;
      CourseService.getAll().then(function (data) {
        vm.courseEntities = data;

        vm.uiState.courses.loadGif = false;
        if(vm.courseEntities.length > 0){
          vm.uiState.courses.showCourses = true;
          vm.uiState.courses.showNoCoursesPanel = false;
        }
        else{
          vm.uiState.courses.showCourses = false;
          vm.uiState.courses.showNoCoursesPanel = true;
        }
      });
    }

    function loadProfessors() {

      ProfessorService.getAll().then(function(data){
          vm.professors = data;

          vm.uiState.professors.loadGif = false;
          if(vm.professors.length > 0){
            vm.uiState.professors.showProfessors = true;
            vm.uiState.professors.showNoProfessorsPanel = false;
          }
          else{
            vm.uiState.professors.showProfessors = true;
            vm.uiState.professors.showNoProfessorsPanel = false;
          }
      });
    }

    function save() {
      vm.uiState.courses.loadGif = true;
      vm.uiState.courses.showNoCoursesPanel = false;
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = CourseService.save(vm.entity);
      promise.then(successCallback, errorCallback);

      function successCallback(data) {
        $log.debug(vm.entity.name);
        loadCourses();
        vm.saveOkMsg = "Course with id " + data.id + " is saved";
        addProfessors()
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
      vm.uiState.courses.loadGif = true;
      CourseService
        .remove(entity)
        .then(function () {
          loadCourses();
        });
    }

    function addProfessors(){
      var professorsLength = vm.selectedProfessors.length;

      debugger;
      for(var i=0 ; i<professorsLength ; i++){
        var professor = vm.selectedProfessors[i];
        if(professor.courses == undefined)
          professor.courses = [];
        professor.courses.push(vm.entity);
        var promise = ProfessorService.save(professor);

        promise.then(successCallback, errorCallback);


      }
      function successCallback(data) {
        $log.debug(vm.entity.name);
        loadCourses();
        vm.saveOkMsg = "Professor with id " + data.id + " is updated";
        addProfessors()
        clear();

      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }

      vm.selectedProfessors = [];
    }
  }

})(angular);

