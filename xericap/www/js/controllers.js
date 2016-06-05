angular.module('starter.controllers', [])

.controller('ExpCtrl', function($scope) {})


.controller("GallCtrl", function($scope, $cordovaCamera, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

    $scope.gallTitle = '<i class="icon ion-camera sherpa" ng-click="takeImage()" ></i>';

    $scope.takeImage = function() {
      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 250,
        targetHeight: 250,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.srcImage = "data:image/jpg;base64," + imageData;
      }, function(err) {
        //err
      });
    }

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
      src: 'img/xeriscaping2.png'
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

  $scope.name = 'John Greene';

  $scope.userImage = 'img/m-emp.png';

  $scope.location = 'Austin | Westlake';

  $scope.biography = "Rakes peacocks, squeal garden woof. Veterinarian at Seeder eggs with watermelon ostriches. Kidney beans ostrich trucks. Utters are weathervane foal est. Utters are weathervane foal est."

  $scope.posts =[{
    src: 'img/xer1.png'
  }, {
    src: 'img/succulents1.png'
  }, {
    src: 'img/xeriscaping2.png'
  }, {
    src: 'img/xer2.png'
  },{
    src: 'img/xeriscape6.jpg'
  }, {
    src: 'img/xeriscaping4.jpg'
  }]
});
