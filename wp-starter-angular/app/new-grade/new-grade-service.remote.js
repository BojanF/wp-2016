/**
 * Created by Bojan on 7/13/2017.
 */


(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .factory('NewGradeService', NewGradeServiceFn);

  NewGradeServiceFn.$inject = ['$log', '$resource'];

  /* @ngInject */
  function NewGradeServiceFn($log, $resource) {
    var groupsList = [];
    var groupIdSequence = 0;
    var resource = $resource('http://localhost:8000/api/grades/:id', {}, {
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


    function saveFn(newGradeEntity) {
      if(newGradeEntity.id === undefined) {
        return resource.save(newGradeEntity, function(data){
          newGradeEntity.id=data.id;
        }).$promise;
      }
      return updateFn(newGradeEntity);


    }

    function updateFn(newGradeEntity) {
      if (newGradeEntity.id === undefined) {
        $log.debug("IFFFF");
        return saveFn(newGradeEntity).$promise;
      }
      $log.debug("UPDATE");
      return resource.update(/*{id: newGradeEntity.id},*/ newGradeEntity).$promise;

    }

    function getByIdFn(gradeId) {
      return resource.get({id:gradeId}).$promise;

    }

    function getAllFn() {
      //debugger;
      //service
      return resource.query().$promise;

    }

    function removeFn(newGradeEntity) {
      $log.debug("DELETE");
      return resource.delete({id:newGradeEntity.id}).$promise;
    }
  }

})(angular);
