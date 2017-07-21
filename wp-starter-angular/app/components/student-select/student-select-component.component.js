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

    });

})();
