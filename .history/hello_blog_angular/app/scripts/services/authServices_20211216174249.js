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
  };
}
.factory('authUser', function($auth ,sessionControl){
  var cacheSession = function(email, username, avatar){
    sessionControl.set('userIsLogin', true);
    sessionControl.set('email', email);
    sessionControl.set('username', username);

  }
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
