/**
 * Created by Bojan on 7/10/2017.
 */

(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('professorSelect', {
      templateUrl: 'app/components/professor-select/professor-select-component.view.html',
      bindings: {
        gsModel: "=",
        professors: "<"
      }

    });

})();
