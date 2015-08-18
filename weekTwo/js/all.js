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
	$scope.edit = false,
	$scope.sortType = "",
	$scope.setSelect = false,
	$scope.setOrder = [],
	$scope.newNumber = 0,
	$scope.nowDate = new Date(),
　	s = $scope.nowDate.getTime();　

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
				place: [
					{
						'seatTitle':"A",
						'seat':10
					},
					{
						'seatTitle':"A",
						'seat':12
					}
					],
				time: 1288323623006,
				phone: '0936-603-933'
			},
			{
				name:'Hal',
				number: 3,
				place: [{'seatTitle':"B",'seat':10},{'seatTitle':"B",'seat':9},{'seatTitle':"B",'seat':8}],
				time: 1288329623006,
				phone: '0911-890-123'
			},
			{
				name:'Austin',
				number: 5,
				place: [{'seatTitle':"A",'seat':6},{'seatTitle':"A",'seat':7},{'seatTitle':"A",'seat':8},{'seatTitle':"A",'seat':9}],
				time: 1288323693006,
				phone: '0919-185-854'
			}
		];
	$scope.setSetting = [
			{
				setTitle:'A',
				sets: [1,3,5,7,9,11,12,10,8,6,4,2]
			},
			{
				setTitle:'B',
				sets: [1,3,5,7,9,11,12,10,8,6,4,2]
			},
			{
				setTitle:'C',
				sets: [1,3,5,7,9,11,12,10,8,6,4,2]
			},
			{
				setTitle:'D',
				sets: [1,3,5,7,9,11,12,10,8,6,4,2]
			}
		]
	$scope.getSetNumber = function (setTitle,set){
		
		
		if ($scope.setOrder.length > 3) {

			alert('每場最多能預訂 4 個位置');

		} else {

			// if (( - set)%4 == 0) {
			// 	alert('請選擇連續座位');
			// }
			this.setSelect = !this.setSelect;
			$scope.setOrder.push({ 
				seatTitle : setTitle,
				seat : set 
			});
			$scope.newNumber = $scope.setOrder.length;
		}
		prvSet = $scope.setOrder[$scope.setOrder.length-2].seat
		
		console.log(($scope.setOrder[$scope.setOrder.length-2].seat-set)%4)

	}
	$scope.addOrder = function () {
		if(this.newName == ''){
			alert('請填寫訂位大名');
		} else if (this.newNumber == '') {
			alert('請至少選擇一個位置');
		} else if (this.newPhone == '') {
			alert('請填寫定位電話');
		} else {
			$scope.orders.push({
				name:$scope.newName,
				number: $scope.newNumber,
				place: $scope.setOrder,
				time: s,
				phone: $scope.newPhone
			})
			this.newName =
			this.newNumber =
			this.newPlace =
			this.newPhone = '';
		};
		

	}
	$scope.delOrder = function (index) {
		this.orders.splice(this.orders.indexOf(index),1);
	}
	$scope.editOrder = function (index) {
		var newPlace = $scope.orders[index].place;
		$scope.orders[index].place = newPlace.split(',');
		// console.log()
	}
};
OrderCtrl.$inject = ['$scope', '$http'];
orderApp.controller('OrderCtrl', OrderCtrl);