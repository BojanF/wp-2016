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

    });

})();
