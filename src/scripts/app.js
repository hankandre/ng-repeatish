angular.module('app', []).controller('AppController', AppController);

AppController.$inject = [];

function AppController() {
  var vm = this;
  vm.hello = 'Hello World!';
  vm.showIndex;

  vm.showCaption = function(index) {
    if (vm.showIndex === index) {
      vm.showIndex = null;
    } else {
      vm.showIndex = index;
    }
    return vm.showIndex;
  };

  vm.images = [
    {
      source: '//unsplash.it/1200/400?random',
      caption: 'Image 1'
    },
    {
      source: '//unsplash.it/1600/800?random',
      caption: 'Image 2'
    },
    {
      source: '//unsplash.it/900/400?random',
      caption: 'Image 3'
    }
  ];
}
