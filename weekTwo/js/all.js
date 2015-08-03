/**
*  Module
*  	
	訂票人: name
	人數: number
	位置: place
	總金額: price
	訂票時間: time
	電話: phone
	E-Mail: mail
* Description
*/
var orderApp = angular.module('orderApp', ['ui.sortable']);
var api = 'https://api.pinterest.com/v3/pidgets/boards/danielle_almond/Movies-2015/pins/';
var OrderCtrl = function ($scope, $http) {
	$scope.edit=false;
	$scope.sortType= "";

	$http.jsonp(api + '?callback=JSON_CALLBACK').success(function(data) {
            $scope.pins = data.data.pins;
        }).error(function(data, status, headers, config) {
            console.log('error');
        });
	$scope.orders = 
		[
			{
				name:'Ilandy',
				number: 2,
				place: ["A-10","A-09"],
				price: 230,
				time: 1288323623006,
				phone: '0936-603-933',
				mail: 'w9874123@gmail.com'
			},
			{
				name:'Hal',
				number: 3,
				place: ["B-10","B-09","B-08"],
				price: 230,
				time: 1288329623006,
				phone: '0911-890-123',
				mail: 'hal@gmail.com'
			},
			{
				name:'Austin',
				number: 5,
				place: ["C-06","C-07","C-08","C-09","C-10"],
				price: 230,
				time: 1288323693006,
				phone: '0919-185-854',
				mail: 'rockonyu@gmail.com'
			}
		];
	$scope.addOrder = function () {
		this.orders.push({
			name:this.newName,
			number: this.newNumber,
			place: this.newPlace.split(','),
			price: this.newPrice,
			time: this.newTime,
			phone: this.newPhone,
			mail: this.newMail
		});
		this.newName,
		this.newNumber,
		this.newPlace,
		this.newPrice,
		this.newTime,
		this.newPhone,
		this.newMail = "";

	}
	$scope.delOrder = function (index) {
		this.orders.splice(this.orders.indexOf(index),1);
	}
	$scope.editOrder = function (index) {
		var newPlace = $scope.orders[index].place;
		$scope.orders[index].place = newPlace.split(',');
		console.log()
	}
};
OrderCtrl.$inject = ['$scope', '$http'];
orderApp.controller('OrderCtrl', OrderCtrl);