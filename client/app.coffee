app = angular.module 'hackerApp', ['ngMeteor'], ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider.when '/landing',
    templateUrl: 'landing.blade'
    controller: 'LandingCtrl'
  $routeProvider.when '/signup',
    templateUrl: 'signup.blade'
    controller: 'SignupCtrl'
  $routeProvider.when '/login',
    templateUrl: 'login.blade'
    controller: 'LoginCtrl'
  $routeProvider.otherwise redirectTo: '/landing'
  $locationProvider.html5Mode true
]