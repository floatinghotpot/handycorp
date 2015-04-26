angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chat) {
    $scope.chats = [];
    function getChats() {
        Chat.find().$promise.then(function(list){ $scope.chats = list; });
    }
    getChats();
    
    $scope.remove = function(chat) {
      Chat.deleteById({id:parseInt(chat.id)}).$promise.then(function(){ getChats(); });
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chat) {
  $scope.chat = {};
  Chat.findById({id:parseInt($stateParams.chatId)}).$promise.then(function(ret){
    $scope.chat = ret;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
