angular.module('categories.bookmarks.create', [
  'suchar.models.bookmarks'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('suchar.categories.bookmarks.create', {
        url: '/bookmarks/create',
        views: {
          '@suchar.categories.bookmarks': {
            templateUrl: 'app/categories/bookmarks/create/create.bookmark.tmpl.html',
            controller: 'CreateBookMarkCtrl',
          }
        }
      })
    ;
  })

  .controller('CreateBookMarkCtrl', function ($scope, $stateParams, bookmarks, $state) {
    $scope.isCreating = false;

    function toggleCreating() {
      $scope.isCreating = !$scope.isCreating;
    }

    function returnToBookmarks() {
      $state.go('suchar.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    function cancelCreating() {
      $scope.isCreating = false;
      returnToBookmarks();
    }

    function createBookmark() {
      bookmarks.createBookmark($scope.newBookmark);
      returnToBookmarks();
    }

    function resetForm() {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $stateParams.category
      };
    }

    $scope.toggleCreating = toggleCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.createBookmark = createBookmark;

    resetForm();
    toggleCreating();
  })
;
