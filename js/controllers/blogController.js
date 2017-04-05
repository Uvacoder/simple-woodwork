app.controller('blogController', ['$scope', blogController]);

function blogController($scope) {
  var vm = this;

  vm.title = {};
  vm.title.name = 'Hello';
}
