angular.module('starter.controllers', [])

.controller('ExpCtrl', function($scope) {})


.controller("GallCtrl", function($scope) {

    $scope.images = [{
      src: 'img/xer1.png'
    }, {
      src: 'img/succulents1.png'
    }, {
      src: 'img/xeriscaping2.png'
    }, {
      src: 'img/xer2.png'
    }, {
      src: 'img/succulents2.png'
    }, {
      src: 'img/succulents3.png'
    }, {
      src: 'img/agavespiral.jpg'
    }, {
      src: 'img/museumpic13.jpg'
    }, {
      src: 'img/xeriscape9.jpg'
    }, {
      src: 'img/pondcabana1right.jpg'
    }, {
      src: 'img/xeriscape2.jpg'
    }, {
      src: 'img/xeriscape1.jpg'
    }, {
      src: 'img/1.jpg'
    }, {
      src: 'img/boulder-landscape.jpg'
    }, {
      src: 'img/xeriscape6.jpg'
    }, {
      src: 'img/xeriscaping4.jpg'
    }, {
      src: 'img/xeriscape5.jpg'
    }, {
      src: 'img/xeriscape7.jpg'
    }, {
      src: 'img/xeriscape8.jpg'
    }, {
      src: 'img/xeriscape9.jpg'
    }, {
      src: 'img/succulents1.png'
    }, {
      src: 'img/xeriscaping2.png'
    }, {
      src: 'img/xer2.png'
    }, {
      src: 'img/succulents2.png'
    }, {
      src: 'img/succulents3.png'
    }, {
      src: 'img/agavespiral.jpg'
    }, {
      src: 'img/museumpic13.jpg'
    }, {
      src: 'img/xeriscape9.jpg'
    }, {
      src: 'img/pondcabana1right.jpg'
    }, {
      src: 'img/xeriscape2.jpg'
    }, {
      src: 'img/xeriscape1.jpg'
    }, {
      src: 'img/1.jpg'
    }, {
      src: 'img/boulder-landscape.jpg'
    }, {
      src: 'img/xeriscape6.jpg'
    }, {
      src: 'img/xeriscaping4.jpg'
    }, {
      src: 'img/xeriscape5.jpg'
    }, {
      src: 'img/xeriscape7.jpg'
    }, {
      src: 'img/xeriscape8.jpg'
    }, {
      src: 'img/xeriscape9.jpg'
    }, {
      src:'img/xeriscape2.jpg'
    }];

    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, images});
        }
    }

})


// .controller('GallCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })
//
// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
