/**
 * Created by Bojan on 7/7/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .config(registerState);


  registerState.$inject = ['$stateProvider'];

  function registerState($stateProvider) {

    $stateProvider.state('professor', {
      url: '/professors',
      templateUrl: 'app/professor/professor.view.html',
      controller: 'ProfessorController',
      controllerAs: 'vm'
    });
  }

})(angular);

