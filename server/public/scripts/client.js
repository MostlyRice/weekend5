/** ---------- ANGULAR MODULE ---------- **/
const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages'])
/** ---------- MODULE CONFIGURATION ---------- **/
myApp.config(($routeProvider, $mdThemingProvider) => {
  console.log('config loaded');

    /* ---------- DEFINE CLIENT SIDE ROUTES ---------- */
    // CHANGE TEMPLATEURL AND CONTROLLER AS NEEDED FOR YOUR PROJECT
    $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html'
    })
    .when('/search', {
      templateUrl: '/views/search.html',
      controller: 'SearchController as sc'
    })
    .when('/favorites', {
      templateUrl: '/views/favorites.html',
      controller: 'FavoritesController as fc'
    })
    .otherwise(
    { redirectTo: '/home' }
    );
  })
   /* ---------- CHANGE THEME AS NEEDED FOR YOUR PROJECT ---------- */
   .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('indigo')
    .warnPalette('red')
    .backgroundPalette('grey');
});