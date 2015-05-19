(function () { // Angular encourages module pattern, good!

    var query = function () {
        this.connectionId = "";
        this.path = "C:\\";
    }

    var app = angular.module('myApp', []);
    app.controller('myCtrl', ['$http', '$scope', function ($http, $scope) {

        var hub = $.connection.myHub; // create a proxy to signalr hub on web server

        hub.client.hello = function () {
            alert('hello');
        };

        $scope.queryInfo = new query();

        $.connection.hub.start().done(function () {
            hub.server.register().done(function (e) {
                $scope.queryInfo.connectionId = $.connection.hub.id;
                if (e != "") {
                    alert(e);
                }
            });
        });

    }]);

})();