"use strict";

/**
 * @ngdoc function
 * @name helloApp.controller:CreateCrtl
 * @description
 * # CreateCrtl
 * Controller of the helloApp
 */
angular.module("helloApp").controller("CreateCrtl", function (postService) {
  var vm = this;

  vm.menuTemplate = {
    url: "views/menu.html",
  };
  vm.posts = [];

  vm.title = "";
  vm.description = "";
  vm.id = "";





  var checkPermission = function(permission){
    var roles=JSON.parse(sessionControl.get('roles'));

    for(var r=0 ; r < roles.length; r++){
      var permissions=roles[r]["permissions"];
        for(var p = 0 ; p< permissions.length; p ++){
          if(permission==permissions[p]["name"]){
            return true;
          }
        }
    }
    return false;
  };

  vm.canUpdate=checkPermission("update blog");
  vm.canSave=checkPermission("create blog");
  vm.canDelete=checkPermission("delete blog");
  vm.canPublish=checkPermission("publish blog");


  vm.edit = function (item) {
    vm.title = item.title;
    vm.description = item.description;
    vm.id = item.id;
  };

  vm.delete = function (item) {
    postService.postDelete(item.id).then(function (response) {
      getData();

      vm.title = "";
      vm.description = "";
      vm.id = 0;
    });
  };

  vm.publish = function (item) {
    postService.postPublish(item.id).then(function (response) {
      getData();

      vm.title = "";
      vm.description = "";
      vm.id = 0;
    });
  };

  vm.reset = function (item) {
    vm.title = "";
    vm.description = "";
    vm.id = 0;
  };

  vm.sendData = function () {
    if (vm.id > 0) {
      postService
        .postEdit(vm.title, vm.description, vm.id)
        .then(function (response) {
          getData();

          vm.title = "";
          vm.description = "";
          vm.id = 0;
        });
    } else {
      postService
        .postCreate(vm.title, vm.description)
        .then(function (response) {
          getData();

          vm.title = "";
          vm.description = "";
          vm.id = 0;
        });
    }
  };

  var getData = function () {
    postService.postList().then(function (response) {
      vm.posts = response.data;
    });
  };

  getData();
});
