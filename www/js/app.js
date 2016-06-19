// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
    templateUrl: 'templates/settings.html',
    controller: 'tasteNotecontroller'
  })


    .state('app.menu', {
      url: '/menu',
      views: {
        'menuContent': {
          templateUrl: 'templates/menu.html'
        }
      }
    })
    .state('app.discover', {
      url: "/discover",
      views: {
        'menuContent': {
          templateUrl: "templates/discover.html"
        }
      }
    })
    .state('app.info', {
      cache: false,
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'
        }
      }
    })
        .state('app.color', {
          cache: false,
      url: '/color',
      views: {
        'menuContent': {
          templateUrl: 'templates/color.html'
        }
      }
    })
        .state('app.smell', {
          cache: false,
      url: '/smell',
      views: {
        'menuContent': {
          templateUrl: 'templates/smell.html'
        }
      }
    })

    .state('app.taste', {
        cache: false,
      url: '/taste',
      views: {
        'menuContent': {
          templateUrl: 'templates/taste.html'
        }
      }
    })
     .state('app.review', {
      url: '/review',
      views: {
        'menuContent': {
          templateUrl: 'templates/review.html'
        }
      }
    })
     .state('app.mynotes', {
      url: '/notes',
      views: {
        'menuContent': {
          templateUrl: 'templates/notes.html',
          controller: 'tasteNotecontroller'
        }
      }
    })
    .state('app.discovernotes', {
     url: '/discovernotes',
     views: {
       'menuContent': {
         templateUrl: 'templates/discovernotes.html'
       }
     }
   })
   .state('app.help-info', {
    url: '/help-info',
    views: {
      'menuContent': {
        templateUrl: 'templates/help-info.html'
      }
    }
  })
  .state('app.help-smell', {
   url: '/help-smell',
   views: {
     'menuContent': {
       templateUrl: 'templates/help-smell.html'
     }
   }
 })
 .state('app.help-taste', {
  url: '/help-taste',
  views: {
    'menuContent': {
      templateUrl: 'templates/help-taste.html'
    }
  }
})
      .state('app.progress', {
          url: '/progress',
          views: {
              'menuContent': {
                  templateUrl: 'templates/Progress.html'
              }
          }
      })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menu');
});
