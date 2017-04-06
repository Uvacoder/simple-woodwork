app.directive('photoDirective', ['$location', function($location) {
  //in html, refer to this directive as sheds-header
  console.log('photoDirective instantiated');
  return {
    restrict: 'E',
    scope: {
      image: "=",
      description: "=",
      title: "=",
      alternate: "="
    },
    link: function(scope, elem, attrs) {

    },
    templateUrl: "../../views/photoCard.html"
  };

}]);
