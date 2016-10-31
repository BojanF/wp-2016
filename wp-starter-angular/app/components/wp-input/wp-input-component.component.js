/**
 * Created by Bojan on 10/31/2016.
 */
(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('wpInput', wpIn);

  //wpIn.$inject = [];



  /* @ngInject */
  function wpIn() {

    var component = {
      templateUrl: 'app/components/wp-input/wp-input-component.view.html',
      bindings: {
        wpLabel: '=',
        wpType: '=',
        wpModel: '='
      },

      controllerAs: 'vm'/*,
      link: link, // since compile is defined, this will not be invoked
      transclude: {
        trName: '?trname',
        trValue: '?trval'
      }*/
    };
    return component;
  }

  /*WpInController.$inject = [];
  function WpInController(){
    console.log("BOJAN ctrl");
  }*/

  /*WpNavController.$inject = [];

  /* @ngInject
  function WpNavController() {
    var vm = this;

    console.log('in directive controller');

    vm.name='Petko';

    vm.invokeFunctionFromObject = invokeFunctionFromObject;

    function invokeFunctionFromObject() {
      if (typeof vm.functionObjectBinding === 'function') {
        console.log('in invokeFunctionFromObject');
        vm.functionObjectBinding();
      } else {
        console.log('no function for attribute functionObjectBinding');
      }
    }
  }*/


})();

