'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:CreateCrtl
 * @description
 * # CreateCrtl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('CreateCrtl', function (postService) {
    var vm = this;

    vm.menuTemplate = {
      url: 'views/menu.html'
    }
    vm.posts=[];

    vm.title="";
    vm.description="";
    vm.id="";


    vm.edit = function(item){



      vm.title=item.title;
      vm.description=item.description;
      vm.id=item.id;

    };

    vm.reset = function(item){



      vm.title=item.title;
      vm.description=item.description;
      vm.id=item.id;

    };


    vm.sendData = function(){



      if(vm.id>0){

        postService.postEdit(vm.title,vm.description,vm.id).then(function(response){

          getData();

          vm.title="";
          vm.description="";
          vm.id=0;

         });
      }else{

        postService.postCreate(vm.title,vm.description).then(function(response){

          getData();

          vm.title="";
          vm.description="";
          vm.id=0;

         });

      }


    };

    var getData = function(){

      postService.postList().then(function(response){
        vm.posts=response.data;
    });
    }

    getData();






  });
