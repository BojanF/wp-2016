/**
 * Created by Bojan on 10/31/2016.
 */
(function () {
  'use strict';

  angular
    .module('wp-angular-starter')
    .component('wpInput', funk);

    funk.$inject = [];


  console.log('test1234');
  /* @ngInject */
  function funk() {

    console.log('test');
    var component = {
      templateUrl: 'app/components/wp-input/wp-input-component.view.html',
      bindings: {
        wpLabel: '@',
        wpType: '@',
        wpModel: '='
      },
      controller: InputComponent,
      controllerAs: 'vm'

    };
    return component;
  }

  InputComponent.$inject = [];
  function InputComponent(){

    console.log('test');
  };



})();

