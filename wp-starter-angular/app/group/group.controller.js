(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('GroupController', GroupController);

  GroupController.$inject = ['$log', 'GroupService', 'ProfessorService'];

  /* @ngInject */
  function GroupController($log, GroupService, ProfessorService) {
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
    vm.uiState = {
      professors:{
        loadGif: true,
        showProfessors: false
      },
      labGroups:{
        loadGif: true,
        showNoGroupsPanel: false,
        showGroups: false
      }
    };
    loadGroups();
    loadProfessors();

    function loadGroups() {
      GroupService.getAll().then(function (data) {
        vm.labGroupsEntities = data;

        vm.uiState.labGroups.loadGif = false;
        if(vm.labGroupsEntities.length > 0){
          vm.uiState.labGroups.showGroups = true;
          vm.uiState.labGroups.showNoGroupsPanel = false;
        }
        else{
          vm.uiState.labGroups.showGroups = false;
          vm.uiState.labGroups.showNoGroupsPanel = true;
        }
      });
    }

    function loadProfessors(){
      ProfessorService.getAll().then(function (data) {
        vm.professors = data;

        vm.uiState.professors.loadGif = false;
        vm.uiState.professors.showProfessors = true;

      })
    }

    function save() {
      vm.uiState.labGroups.loadGif = true;
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
      //za da se poplni vo view-to
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      vm.uiState.labGroups.loadGif = true;
      GroupService
        .remove(entity)
        .then(function () {
          loadGroups();
        });
    }
  }

})(angular);

