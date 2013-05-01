angular.element(document).ready ->
  angular.bootstrap document, ['hackerApp']

app = angular.module 'hackerApp', ['ngMeteor'], ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider.when '/landing',
    templateUrl: 'landing.blade',
    controller: 'LandingCtrl'
  $routeProvider.otherwise redirectTo: '/landing'
  $locationProvider.html5Mode true
]