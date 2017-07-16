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
    // vm.addCourse = addCourse;
    // vm.newCourses = [];
    vm.entity = {};
    vm.professorEntities = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    // vm.coursesShow = false;
    vm.groups = [];
    vm.students = [];
      //vm.availableSizes = [20, 40];
    loadProfessors();
    loadGroups();
    loadStudents();

    function loadStudents() {
      StudentService.getAll().then(function (data) {
        vm.students = data;

      })
    }

    function loadProfessors() {
      //debugger;
      //controller
      ProfessorService.getAll().then(function (data) {
        vm.professorEntities = data;
      });
    }

    function loadGroups() {
      //debugger;
      GroupService.getAll().then(function (data) {
        vm.groups = data;
      });
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;
      // vm.coursesShow = false;
      //debugger;
      // if(vm.entity.courses == undefined)
      //   vm.entity.courses = [];
      // for(var i=0 ; i<vm.newCourses.length ; i++) {
      //   vm.entity.courses.push(vm.newCourses[i]);
      // }
      // vm.newCourses = [];
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
      // vm.coursesShow = false;
      vm.entity = {};
    }

    function edit(entity) {
      vm.entity = {};
      // vm.coursesShow = true;
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      NewGradeService
        .remove(entity)
        .then(function () {
          loadProfessors();
        });
    }

    // function addCourse(newGradeEntity, courseEntity){
    //   debugger;
    //   newGradeEntity.courses.push(courseEntity);
    //   vm.entity = newGradeEntity;
    //   save();
    // }
  }

})(angular);
