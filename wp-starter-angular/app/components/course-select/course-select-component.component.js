/**
 * Created by Bojan on 7/10/2017.
 */


(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('courseSelect', {
      templateUrl: 'app/components/course-select/course-select-component.view.html',
      bindings: {
        gsModel: "=",
        courses: "<"
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
