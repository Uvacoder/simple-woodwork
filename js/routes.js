app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/main.html',
    controller: 'mainController as mc',
    css: 'css/main.css'
  }).when('/about', {
    templateUrl: '../views/about.html',
    controller: 'aboutController as ac',
    css: 'css/about.css'
  }).when('/gallery', {
    templateUrl: '../views/gallery.html',
    controller: 'galleryController as gc',
    css: 'css/gallery.css'
  }).when('/blog', {
    templateUrl: '../views/blog.html',
    controller: 'blogController as bc',
    css: 'css/blog.css'
  }).when('/contact', {
    templateUrl: '../views/contact.html',
    controller: 'contactController as cc',
    css: 'css/contact.css'
  });
});
