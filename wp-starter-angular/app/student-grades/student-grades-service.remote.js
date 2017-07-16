/**
 * Created by Bojan on 7/13/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .factory('StudentGradesService', StudentGradesServiceFn);

  StudentGradesServiceFn.$inject = ['$log', '$resource'];

  /* @ngInject */
  function StudentGradesServiceFn($log, $resource) {
    var resource = $resource('http://localhost:8000/api/grades/student/:id', {}, {
      update:{isArray:false, method:'PUT'},
      get:{isArray:true, method:'GET'}
    });

    var service = {
      studentGrades: getStudentGradesFn
    };
    return service;


    function getStudentGradesFn(studentId) {
      return resource.get({id:studentId}).$promise;
    }

  }
})(angular);
