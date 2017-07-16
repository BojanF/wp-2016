(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('GroupController', GroupController);

  GroupController.$inject = ['$log', 'GroupService', 'ProfessorService', 'CourseService'];

  /* @ngInject */
  function GroupController($log, GroupService, ProfessorService, CourseService) {
    var vm = this;
    vm.title = 'Group';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.entity = {};
    vm.labGroupsEntities = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.availableSizes = [20, 40];
    vm.professors = [];
    vm.courses = [];
    loadGroups();
    // loadProfessors();
    // loadCourses();

    function loadGroups() {
      GroupService.getAll().then(function (data) {
        vm.labGroupsEntities = data;
      });
    }

    function loadProfessors(){
      ProfessorService.getAll().then(function (data) {
        vm.professors = data;

      })
    }

    function loadCourses(){
      CourseService.getAll().then(function (data) {
        vm.courses = data;

      })
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = GroupService.save(vm.entity);

      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        $log.debug(vm.entity.name);
        loadGroups();
        vm.saveOkMsg = "Group with id " + data.id + " is saved";
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
      //za d se poplni vo view-to
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      GroupService
        .remove(entity)
        .then(function () {
          loadGroups();
        });
    }
  }

})(angular);

