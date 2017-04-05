app.directive('headerDirective', ['$location', function($location) {
  //in html, refer to this directive as sheds-header
  console.log('headerDirective instantiated');
  return {
    restrict: 'E',
    scope: {
      current: "@"
    },
    link: function(scope, elem, attrs) {
      scope.goTo = function(str){
        $location.path(str);
      };

      scope.locate = $location.path();
      console.log(scope.locate);
    },
    templateUrl: "../../views/header.html"
  };

}]);
