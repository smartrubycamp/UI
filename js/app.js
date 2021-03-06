angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.Repository', {
      url: '/Repository',
      views: {
        'menuContent': {
          templateUrl: 'templates/studentRepository.html'
        }
      }
    })
  .state('app.viewPost', {
      url: '/viewPost',
      views: {
        'menuContent': {
          templateUrl: 'templates/viewPost.html'
        }
      }
    })
  .state('app.Fees', {
      url: '/Fees',
      views: {
        'menuContent': {
          templateUrl: 'templates/fees.html'
        }
      }
    })
    .state('app.Timetable', {
      url: '/Timetable',
      views: {
        'menuContent': {
          templateUrl: 'templates/timeTable.html'
        }
      } 
    })
    .state('app.next', {
      url: '/app.next',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html'
        }
      }
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	 .state('app.viewProfile', {
      url: '/viewProfile',
      views: {
        'menuContent': {
          templateUrl: 'templates/viewProfile.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	 .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	 .state('app.photos', {
      url: '/photos',
      views: {
        'menuContent': {
          templateUrl: 'templates/photos.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	 .state('app.calendar', {
      url: '/calendar',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html',
          controller: 'CalendarDemoCtrl'
        }
      }
    })
	 .state('app.addEvent', {
      url: '/addEvent',
      views: {
        'menuContent': {
          templateUrl: 'templates/addEvent.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	 .state('app.report', {
      url: '/report',
      views: {
        'menuContent': {
          templateUrl: 'templates/report.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })


  $urlRouterProvider.otherwise('/app/dashboard');
});
