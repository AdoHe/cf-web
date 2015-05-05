'use strict';

angular.module('slb.module')
.factory('slbApiSvc', function($http, $q, $, _, pathSvc) {

  function createNode(node) {
  }

  function saveNode(node) {
  }

  function deleteNode(node) {
  }

  function fetchServicesList() {
    return $http.get(pathSvc.getHost() + pathSvc.getServicesListPath(), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.services;
    });
  }

  function fetchServiceInstances(service) {
    return $http.get(pathSvc.getHost() + pathSvc.getServiceInstancesPath(service.serviceName, service.serviceNamespace), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.instances;
    });
  }

  function fetchInstances() {
    return $http.get(pathSvc.getHost() + pathSvc.getInstancesPath(), {
      supressNotifications: true
    })
    .then(function(resp) {
      return resp.data.instances;
    });
  }

  function checkHealth(url) {
    return $http.post(pathSvc.getHost() + pathSvc.getInstancePath(), {
      url: url
    })
    .then(function(resp) {
      return resp.data.status;
    });
  }

  function dropOut(instance) {
    var ip = instance.url.substring(instance.url.indexOf(':') + 3, instance.url.lastIndexOf(':'));
    console.log(ip);
    return $http.delete(pathSvc.getHost() + pathSvc.getDropOutInstancePath(instace.env, ip))
      .then(function(resp) {
      });
  }

  return {
    fetchServicesList: fetchServicesList,

    fetchServiceInstances: fetchServiceInstances,

    fetchInstances: fetchInstances,

    checkHealth: checkHealth,

    dropOut: dropOut,

    create: createNode,

    save: saveNode,

    delete: deleteNode
  };

});
