var myApp = angular.module('myApp', []);
    var api = 'https://api.pinterest.com/v3/pidgets/boards/ilandychiu/海報dm設計/pins/';

    /* function 名稱小寫開頭會出錯 */
    var MyController = function($scope, $http) {
        $scope.pins = [];
        $scope.select = true;
        $http.jsonp(api + '?callback=JSON_CALLBACK').success(function(data) {
            $scope.pins = data.data.pins;
        }).error(function(data, status, headers, config) {
            console.log('error');
        });
    };

    /* 相依性注入：支援最小化 js 檔案 */
    MyController.$inject = ['$scope', '$http'];
    myApp.controller('MyController', MyController);