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
    vm.uiState = {
      loadStudents:{
        loadGif: true,
        showStudents: false
      },
      loadGrades:{
        loadGif: false,
        showNoGradesPanel: false,
        showGrades: false
      }
    };
    vm.c3Data = {
      points:{
        pointsGradesValues: []
      },
      columns:{
        gradesValue: {
          donut: [],
          bar: []
        }
      }
    }

    vm.gradeValues = [6, 7, 8, 9, 10];

    loadStudents();

    function c3GradesValues(){
      var gradesLength = vm.studentGrades.length;
      var points = [];
      var columnsDonut = [];
      var columnsBar = [];

      for(var i=0 ; i<5 ; i++){


        var gradeNumberCounter = 0;
        var pointObject = {};
        var grade = vm.gradeValues[i];
        for(var j=0 ; j<gradesLength; j++){
          if(vm.studentGrades[j].gradeValue == grade){
            gradeNumberCounter++;
          }
        }
        pointObject[grade] = gradeNumberCounter;
        points.push(pointObject);
        columnsDonut.push({"id":grade.toString(), "type":"donut"});
        columnsBar.push({"id":grade.toString(), "type":"bar"});

      }

      vm.c3Data.points.pointsGradesValues = points;
      vm.c3Data.columns.gradesValue.donut = columnsDonut;
      vm.c3Data.columns.gradesValue.bar = columnsBar;
    }

    function loadStudents() {
      StudentService.getAll().then(function (data) {
        vm.studentEntities = data;

        vm.uiState.loadStudents.loadGif = false;
        vm.uiState.loadStudents.showStudents = true;
      });
    }

    function getGrades(){

      vm.uiState.loadGrades.loadGif = true;
      vm.uiState.loadGrades.showNoGradesPanel = false;
      vm.uiState.loadGrades.showGrades = false;

      StudentGradesService.studentGrades(vm.studentEntity.id).then(function (data) {
        vm.studentGrades = data;



        vm.uiState.loadGrades.loadGif = false;
        if(vm.studentGrades.length > 0){
          vm.uiState.loadGrades.showGrades = true;
          vm.uiState.loadGrades.showNoGradesPanel = false;
        }
        else{
          vm.uiState.loadGrades.showGrades = false;
          vm.uiState.loadGrades.showNoGradesPanel = true;
        }

        c3GradesValues();
      })
    }

  }

})(angular);

