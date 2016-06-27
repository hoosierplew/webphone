(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
  .controller('HomeController', [
    "$scope",
    "$state",
    "$http",
    function($scope, $state, $http){
      $scope.activities = [
        {
          recency: '3 hours ago',
          to_s: 'Voicemail received from William Bridgeman',
          callType: 'voicemail'
        },
        {
          recency: '5 hours ago',
          to_s: 'Voicemail sent to Joseph Walker',
          callType: 'voicemail'
        },
        {
          recency: '6 hours ago',
          to_s: 'Missed call from Neil Armstrong',
          callType: 'missed-call'
        },
        {
          recency: '7 hours ago',
          to_s: 'Disconnected call with Robert White',
          callType: 'disconnected-call'
        },
        {
          recency: 'Yesterday',
          to_s: 'Call with Alvin White',
          callType: 'call'
        }
      ];
      $scope.tools = [
        {
          icon: 'fa-comment-o',
          to_s: 'Voicemail'
        },
        {
          icon: 'fa-arrow-circle-right',
          to_s: 'Call Forwarding'
        },
        {
          icon: 'fa-mobile',
          to_s: 'SMS'
        },
        {
          icon: 'fa-users',
          to_s: 'Conference Calling'
        }
      ];
      return $scope;
    }
  ])
  .controller('CallController', [
    "$scope",
    "$state",
    "$http",
    function($scope, $state, $http){
      $scope.contacts = [
        {
          contactType: 'email',
          detail: 'onesmallstep@gmail.com',
          favorite: true,
          to_s: 'Neil A. Armstrong'
        },
        {
          contactType: 'phone',
          detail: '321-109-8765',
          favorite: true,
          to_s: 'Bill Bridgeman'
        },
        {
          contactType: 'facebook',
          detail: 'Facebook Contact',
          favorite: true,
          to_s: 'Scott Crossfield'
        },
        {
          contactType: 'phone',
          detail: '321-123-4567',
          to_s: 'Iven C. Kincheloe'
        },
        {
          contactType: 'google',
          detail: 'Google Contact',
          to_s: 'Joseph A. Walker'
        },
        {
          contactType: 'twitter',
          detail: '@MachThreeMannn',
          to_s: 'Alvin S. White'
        }
      ];
      return $scope;
    }
  ])
  .config(config)
  .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
