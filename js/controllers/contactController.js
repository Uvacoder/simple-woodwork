app.controller('contactController', ['$scope', contactController]);

function contactController($scope) {
  var vm = this;

  vm.title = {};
  vm.title.name = 'Hello';
}
