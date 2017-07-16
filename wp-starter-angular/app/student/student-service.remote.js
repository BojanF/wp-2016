/**
 * Created by Bojan on 7/12/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .factory('StudentService', StudentServiceFn);

  StudentServiceFn.$inject = ['$log', '$resource'];

  /* @ngInject */
  function StudentServiceFn($log, $resource) {
    // var groupsList = [];
    // var groupIdSequence = 0;
    var resource = $resource('http://localhost:8000/api/students/:id', {}, {
      update:{isArray:false, method:'PUT'}
    });
    var service = {
      save: saveFn,
      update: updateFn,
      getById: getByIdFn,
      getAll: getAllFn,
      remove: removeFn
    };


    return service;


    function saveFn(studentEntity) {
      //debugger;
      if(studentEntity.id === undefined) {
        return resource.save(studentEntity, function(data){
          studentEntity.id=data.id;
        }).$promise;
      }
      return updateFn(studentEntity);


    }

    function updateFn(studentEntity) {
      if (studentEntity.id === undefined) {
        $log.debug("IFFFF");
        return saveFn(studentEntity).$promise;
      }
      $log.debug("UPDATE");
      return resource.update(/*{id: studentEntity.id},*/ studentEntity).$promise;

    }

    function getByIdFn(studentId) {
      return resource.get({id:studentId}).$promise;

    }

    function getAllFn() {
      //debugger;
      return resource.query().$promise;

    }

    function removeFn(studentEntity) {
      $log.debug("DELETE");
      return resource.delete({id:studentEntity.id}).$promise;
    }
  }

})(angular);
