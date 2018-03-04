/** ---------- ANGULAR MODULE ---------- **/
const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/** ---------- MODULE CONFIGURATION ---------- **/
myApp.config(function($routeProvider, $mdThemingProvider){
  console.log('config loaded');

  /* ---------- DEFINE CLIENT SIDE ROUTES ---------- */
  // CHANGE TEMPLATEURL AND CONTROLLER AS NEEDED FOR YOUR PROJECT
  $routeProvider
  .when('/URLHERE', {
      templateUrl: '/views/viewName.html',
      controller: 'CONTROLLERNAME as vm'
  })
  .when('/URLHERE', {
      templateUrl: '/views/viewName.html',
      controller: 'CONTROLLERNAME as vm'
  })
  .otherwise(
      { redirectTo: '/URLHERE' }
  );
  /* ---------- CHANGE THEME AS NEEDED FOR YOUR PROJECT ---------- */
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('blue-grey');
});