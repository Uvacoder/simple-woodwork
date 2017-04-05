app.controller('mainController', ['$scope', '$location', '$anchorScroll', mainController]);

function mainController($scope, $location, $anchorScroll) {
  var vm = this;
  vm.goTo = function(str){
    $location.hash(str);
    // $anchorScroll();
  };

  vm.onLoadHash = function(){
    console.log($location.path());
  };
  vm.onLoadHash();

  vm.title = {};
  vm.title.name = 'Hello';
}
