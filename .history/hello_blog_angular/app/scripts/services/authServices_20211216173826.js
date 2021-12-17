'use strict'

angular.module('authService',[])
.factory('sessionControl', function(){
  return{
    get:function(key){
      return sessionStorage.getItem(key)
    },
    set: function(key,val){
      return sessionStorage.setItem(key, val);
    },
    unset: function(key){
       return sessionStorage.removeItem(key);
    }
  }
})
.factory('authUser', function($auth){
  var login = function(loginForm){
        $auth.login(loginForm).then(
          function (response){
            console.log(response);

          },
          function(error){
            console.log(error)
          }
        );
  };

  return{
    loginApi:function (loginForm){
      login(loginForm);
    }
  }
});
