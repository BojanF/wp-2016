/**
 * Created by Bojan on 7/13/2017.
 */

(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .config(registerState);


  //registerState.$inject = ['$stateProvider'];

  function registerState($stateProvider) {

    $stateProvider.state('student-grades', {
      url: '/student-grades',
      templateUrl: 'app/student-grades/student-grades.view.html',
      controller: 'StudentGradesController',
      controllerAs: 'vm'
    });
  }

})(angular);
