'use strict'

angular.module('postService',[])
.factory('postControl', function($http, toastr, $location){

  var postList = function(){

    this.Users = '';
          this.errors = '';
          $http({
             method: 'GET',
             url: '/Home/GetEmployeeList',
             params: { filterData: 'Test' },
             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).then(onSuccess, onError);

          var onSuccess = function (response) {
              this.Users = response.data;
              this.errors = '';
          };

         var onError = function (reason) {
              this.users = null;
              this.errors = "Error in retrieving data.";
         };

  };

  return{
    postList:function (loginForm){

      postList();
    }

  }
});
