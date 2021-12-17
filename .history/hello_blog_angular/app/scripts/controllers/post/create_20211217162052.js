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
      vm.id=item.description;
      console.log(item);

    };



    vm.sendData = function(){



      postService.postCreate(vm.title,vm.description).then(function(response){

        getData();

        vm.title="";
        vm.description="";

       });

    };

    var getData = function(){

      postService.postList().then(function(response){
        vm.posts=response.data;
    });
    }

    getData();






  });
