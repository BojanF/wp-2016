/**
 * Created by Bojan on 7/13/2017.
 */


(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('studentSelect', {
      templateUrl: 'app/components/student-select/student-select-component.view.html',
      bindings: {
        gsModel: "=",
        students: "<"
      }
      // controller: CourseSelectComponent

    });
  // CourseSelectComponent.$inject = ['$attrs', 'CourseService'];
  // function CourseSelectComponent($attrs, CourseService){
  //   var vm = this;
  //   // vm.courses = [];
  //   // CourseService.getAll().then(function(data){
  //   //   vm.courses = data;
  //   // });
  //   // //this.gsModel = $attrs.gsModel;
  //   // vm.courses = GroupController.posebnaFunc();
  // };



})();
