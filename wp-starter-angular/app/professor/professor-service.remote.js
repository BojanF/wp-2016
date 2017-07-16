/**
 * Created by Bojan on 7/7/2017.
 */
(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .factory('ProfessorService', ProfessorServiceFn);

  ProfessorServiceFn.$inject = ['$log', '$resource'];

  /* @ngInject */
  function ProfessorServiceFn($log, $resource) {
    var groupsList = [];
    var groupIdSequence = 0;
    var resource = $resource('http://localhost:8000/api/professors/:id', {}, {
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


    function saveFn(professorEntity) {
      if(professorEntity.id === undefined) {
        return resource.save(professorEntity, function(data){
          professorEntity.id=data.id;
        }).$promise;
      }
      return updateFn(professorEntity);


    }

    function updateFn(professorEntity) {
      if (professorEntity.id === undefined) {
        $log.debug("IFFFF");
        return saveFn(professorEntity).$promise;
      }
      $log.debug("UPDATE");
      return resource.update(/*{id: professorEntity.id},*/ professorEntity).$promise;

    }

    function getByIdFn(professorId) {
      return resource.get({id:professorId}).$promise;

    }

    function getAllFn() {
      //debugger;
      //service
      return resource.query().$promise;

    }

    function removeFn(professorEntity) {
      $log.debug("DELETE");
      return resource.delete({id:professorEntity.id}).$promise;
    }
  }

})(angular);



