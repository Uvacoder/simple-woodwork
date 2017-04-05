app.controller('aboutController', ['$scope', aboutController]);

function aboutController($scope) {
  var vm = this;

  vm.title = {};
  vm.title.name = 'Hello';
}
