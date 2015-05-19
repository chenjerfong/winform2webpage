(function () { // Angular encourages module pattern, good!

    var app = angular.module('myApp', []);
    app.controller('myCtrl', ['$http', '$scope', function ($http, $scope) {

        var hub = $.connection.myHub; // create a proxy to signalr hub on web server

        hub.client.hello = function () {
            alert('hello');
        };

        $.connection.hub.start().done(function () {
            hub.server.hello().done(function (e) {
            });
        });

    }]);

})();