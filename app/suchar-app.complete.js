angular.module('Suchar', [
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('suchar', {
        url: '',
        abstract: true
      })
    ;
    $urlRouterProvider.otherwise('/');
  })

;