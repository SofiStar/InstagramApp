angular.module('starter.services')

.factory('User', function($q, $http, API_ENDPOINT) {

  var user = null;

  return {
    login: function(username, password) {
      return $q(function(resolve, reject){
        $http.post(API_ENDPOINT.url + "login", { username: username, password: password}).then(function(result){
          if(result.status == 200)
          {
            user = { id: result.data.id, username: result.data.username };
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    },
    isLogged: function()
    {
      return $q(function(resolve, reject){
        if(user != null)
        {

          resolve(
          );
        }
        else
        {
          reject();
        }
      });
    },
    signup: function( newusername, newpassword) {
      return $q(function(resolve, reject){
        $http.post(API_ENDPOINT.url + "signup", { username: newusername, password: newpassword}).then(function(result){
          if(result.status == 200)
          {
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    },
    getLoggedUser: function()
    {
      return user;
    }
  };
})

.factory('Users', function($q) {

    var activeUser = {
            id: 1,
            username: "harryp",
            fullName: "Harry Potter",
            profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg",
            postCount: 13,
            followers: 52,
            following: 2,
            activity: [
                {
                    userId: 2,
                    username: "JohnCat",
                    fullName: "Harry Potter",
                    profileImageSmall: "http://nerdist.com/wp-content/uploads/2016/02/20160210_nerdistnews_harrypottercursedchild_1x1.jpg",
                    type: "commented",
                    comment: "Omg,awesome picture!!",

                },
                {
                    userId: 3,
                    username: "JohnnyDog",
                    fullName: "John Cat",
                    profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg",
                    type: "commented",

                }
            ]
        };

    var users = [
        {
            id: 1,
            username: "harryp",
            fullName: "Harry Potter",
            profileImageSmall: "http://nerdist.com/wp-content/uploads/2016/02/20160210_nerdistnews_harrypottercursedchild_1x1.jpg"
        },
        {
            id: 2,
            username: "JohnCat",
            fullName: "John Cat",
            profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
        },
        {
            id: 3,
            username: "JohnnyDog",
            fullName: "Johnny Dog",
            profileImageSmall: "https://s-media-cache-ak0.pinimg.com/originals/b0/54/f9/b054f9bf75fe74a38995cb0ccc240af5.jpg"
        }
    ];

 ////search user deleted
});
