/**
 * Created by Bojan on 7/16/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .factory('ProfessorGradesService', ProfessorGradesServiceFn);

  ProfessorGradesServiceFn.$inject = ['$log', '$resource'];

  /* @ngInject */
  function ProfessorGradesServiceFn($log, $resource) {
    var resource = $resource('http://localhost:8000/api/grades/professor/:id', {}, {
      get:{isArray:true, method:'GET'}
    });

    var service = {
      professorGrades: getProfessorGradesFn
    };
    return service;


    function getProfessorGradesFn(professorId) {
      return resource.get({id:professorId}).$promise;
    }
  }
})(angular);
