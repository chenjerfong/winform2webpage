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

        hub.client.ReportStep = function (message) {
        };

        hub.client.ReportResult = function (path, fileCount, totalSize) {
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

        $scope.start = function () {
            var url = "http://localhost:36344/StartRun";
            $http.post(url, $scope.queryInfo)
                .success(function (data, status) {
                })
                .error(function (data, status) {
                });
        };
        $scope.stop = function () {
            var url = "http://localhost:36344/StopRun";
            $http.post(url, $scope.queryInfo)
                .success(function (data, status) {
                })
                .error(function (data, status) {
                });
        };

    }]);

})();