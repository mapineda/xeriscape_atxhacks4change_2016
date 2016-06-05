angular.module('starter.controllers', [])

.controller('ExpCtrl', function($scope) {})


.controller("GallCtrl", function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

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

    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, images});
        }
    }

    $scope.showImages = function(index) {
      $scope.activeSlide = index;
      $scope.showModal('templates/gallery-zoomview.html');
    };

    $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    }

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };

    $scope.updateSlideStatus = function(slide) {
      var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
      if (zoomFactor == $scope.zoomMin) {
        $ionicSlideBoxDelegate.enableSlide(true);
      } else {
        $ionicSlideBoxDelegate.enableSlide(false);
      }
    };


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
