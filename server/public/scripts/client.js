const app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController as hc'
    }).when('/movie', {
        templateUrl: 'views/templates/movie.hmtl',
        controller: 'MovieController as mc'
    }).when('/favorites', {
        templateUrl: 'views/templates/favorites.html',
        controller: 'FavoritesController as fc'
    }).when('/user', {
        templateUrl: 'views/templates/user.html',
        controller: 'UserController as fc'
    }).when('/random', {
        templateUrl: 'views/templates/random.html',
        controller: 'RandomController as rc'
    }).when('/register', {
        templateUrl: 'views/templates/register.html',
        controller: 'RegisterController rc'
    }).when('/login', {
        templateUrl: 'views/templates/login.html',
        controller: 'LoginController as lc'
    }).when('/', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController as hc'
    }).otherwise({
        template: '<h1>404 Page Not Found</h1>'
    });
});