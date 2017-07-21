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
    vm.xValues={6:"6", 7:"7", 8:"8", 9:"9", 10:"10"};
    vm.c3Data = {
      points: {
        pointsGradesPerCourse: [],
        pointsGradesValues: []
      },
      columns:{
        gradesPerCourse:{
          donut: [],
          bar: []
        },
        gradesValue: {
          donut: [],
          bar: []

        }
      }
    }

    vm.uiState = {
      loadProfessors:{
        loadGif: true,
        showNoProfessorsPanel: false,
        showProfessors: false
      },
      loadGrades:{
        loadGif: false,
        showNoGradesPanel: false,
        showGrades: false
      }
    };

    vm.gradeValues = [6, 7, 8, 9, 10];

    loadProfessors();

    function c3GradesPerCourse(){
      var points = [];
      var columnsDonut = [];
      var columnsBar = [];
      var courses = [];
      var gradesLength = vm.professorGrades.length;

      //# of different courses
      for(var i=0 ; i<gradesLength ; i++ ){
        var courseName = vm.professorGrades[i].group.course.shortName;
        if(!courses.includes(courseName))
          courses.push(courseName);
      }

      var coursesLength = courses.length;
      //debugger;
      for(var i=0 ; i<coursesLength ; i++){
        var pointObject = {};
        var courseGradesNumber = 0;
        var courseName = courses[i];
        for(var j=0 ; j<gradesLength ; j++ ){
          if(vm.professorGrades[j].group.course.shortName == courseName){
            courseGradesNumber++;
          }
        }
        pointObject[courseName] = courseGradesNumber;

        points.push(pointObject);
        columnsDonut.push({"id":courseName, "type": "donut"});
        columnsBar.push({"id":courseName, "type":"bar"});
      }

      vm.c3Data.points.pointsGradesPerCourse = points;
      vm.c3Data.columns.gradesPerCourse.bar = columnsBar;
      vm.c3Data.columns.gradesPerCourse.donut = columnsDonut;
     }

    function c3GradesValues() {

      var gradesLength = vm.professorGrades.length;
      var points = [];
      var columnsDonut = [];
      var columnsBar = [];

      for(var i=0 ; i<5 ; i++){


        var gradeNumberCounter = 0;
        var pointObject = {};
        var grade = vm.gradeValues[i];
        for(var j=0 ; j<gradesLength; j++){
          if(vm.professorGrades[j].gradeValue == grade){
            gradeNumberCounter++;
          }
        }
        pointObject[grade] = gradeNumberCounter;
        points.push(pointObject);
        columnsDonut.push({"id":grade.toString(), "type":"donut"});
        columnsBar.push({"id":grade.toString(), "type":"bar"});
        // debugger;
        // console.log(points);
      }
      // debugger;
      vm.c3Data.points.pointsGradesValues = points;
      vm.c3Data.columns.gradesValue.donut = columnsDonut;
      vm.c3Data.columns.gradesValue.bar = columnsBar;
      // console.log(points);
      // console.log(columnsDonut);
      // console.log(columnsBar);
    }

    function loadProfessors() {
      ProfessorService.getAll().then(function (data) {
        vm.professorEntities = data;

        vm.uiState.loadProfessors.loadGif = false;
        vm.uiState.loadProfessors.showProfessors = true;
      });
    }

    function getGrades(){

      vm.uiState.loadGrades.loadGif = true;
      vm.uiState.loadGrades.showNoGradesPanel =  false;
      vm.uiState.loadGrades.showGrades = false

      ProfessorGradesService.professorGrades(vm.professorEntity.id).then(function (data) {
        vm.professorGrades = data;

        vm.uiState.loadGrades.loadGif = false;
        if(vm.professorGrades.length > 0){
          vm.uiState.loadGrades.showGrades = true;
          vm.uiState.loadGrades.showNoGradesPanel = false;
        }
        else{
          vm.uiState.loadGrades.showGrades = false;
          vm.uiState.loadGrades.showNoGradesPanel = true;
        }

        c3GradesPerCourse();
        c3GradesValues();
      })
    }

  }

})(angular);
