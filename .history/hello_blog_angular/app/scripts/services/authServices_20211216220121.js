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
})
.factory('authUser', function($auth ,sessionControl, toastr, $location){
  var cacheSession = function(email, username, avatar,roles){
    sessionControl.set('userIsLogin', true);
    sessionControl.set('email', email);
    sessionControl.set('username', username);
    sessionControl.set('avatar', avatar);
    sessionControl.set('roles', roles);




  };

  var unCacheSession = function(){
    sessionControl.unset('userIsLogin', true);
    sessionControl.unset('email', "");
    sessionControl.unset('username', "");
    sessionControl.unset('avatar', "");
    sessionControl.set('roles', []);

  };

  ;



  var checkPermission = function(permission){

    var roles=sessionControl.get('roles');

    for(var r=0 ; r < roles.lenght; r++){

      var permissions=roles[r]["permissions"];

        for(var p = 0 ; p< permissions.length; p ++){

          if(permission==permissions[p]["name"]){
            return true;
          }
        }
    }

    return false;

  };




  var login = function(loginForm){
        $auth.login(loginForm).then(

          function (response){


            cacheSession(response.data.user.email, response.data.user.name, loginForm.avatar, response.data.user.roles);





            $location.path('/');

            if(checkPermission("create blog")){
              toastr.success('session iniciada con exito', 'Mensaje');

          }else{
            toastr.success('session iniciada con exito asdf asd ', 'Mensaje');

          }


          },
          function(error){
            unCacheSession();
            toastr.error(error.data.error, ' Error');
            console.log(error);
          }
        );
  };

  return{
    loginApi:function (loginForm){
      login(loginForm);
    },
    logout: function(){
       $auth.logout();
       unCacheSession();
       toastr.success('Sesion cerrada con exito', 'Mensaje');
       $location.path('/login');
    },
    isLoggedIn: function(){
      return sessionControl.get('userIsLogin') !== null;
    }
  }
});
