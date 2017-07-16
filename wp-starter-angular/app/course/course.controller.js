/**
 * Created by Bojan on 7/8/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('CourseController', CourseController);

  CourseController.$inject = ['$log', 'CourseService'];

  /* @ngInject */
  function CourseController($log, CourseService) {
    var vm = this;
    vm.title = 'Course';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.entity = {};
    vm.courseEntities = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    loadCourses();

    function loadCourses() {
      //debugger;
      CourseService.getAll().then(function (data) {
        vm.courseEntities = data;
      });
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = CourseService.save(vm.entity);
      promise.then(successCallback, errorCallback);

      function successCallback(data) {
        $log.debug(vm.entity.name);
        loadCourses();
        vm.saveOkMsg = "Course with id " + data.id + " is saved";
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
      CourseService
        .remove(entity)
        .then(function () {
          loadCourses();
        });
    }
  }

})(angular);

