/**
 * Created by Bojan on 7/16/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .config(registerState);


  //registerState.$inject = ['$stateProvider'];

  function registerState($stateProvider) {

    $stateProvider.state('professor-grades', {
      url: '/professor-grades',
      templateUrl: 'app/professor-grades/professor-grades.view.html',
      controller: 'ProfessorGradesController',
      controllerAs: 'vm'
    });
  }

})(angular);
