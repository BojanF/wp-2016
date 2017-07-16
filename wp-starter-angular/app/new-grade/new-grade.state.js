/**
 * Created by Bojan on 7/13/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .config(registerState);


  registerState.$inject = ['$stateProvider'];

  function registerState($stateProvider) {

    $stateProvider.state('new-grade', {
      url: '/new-grade',
      templateUrl: 'app/new-grade/new-grade.view.html',
      controller: 'NewGradeController',
      controllerAs: 'vm'
    });
  }

})(angular);
