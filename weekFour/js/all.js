/**
*  Module
*
* Description
*/
var app = angular.module('myApp', []);
var OXController = function ($scope){
	$scope.whoSelect = 0;
	$scope.items = [4,4,4,4,4,4,4,4,4];
	$scope.pinIt = function (index){
		var whoSelected = $scope.whoSelect % 2 ;
		$scope.items[index] = whoSelected;
		$scope.whoSelect++;
	}
	$scope.confirm = function (string){
		var reload = confirm(string);
		if(reload == true) {
			window.location.reload();
		}
	}
	$scope.checkRow = function(){
		var row = 0,
		col = 0,
		slash = 0,
		all = 0;
		for(i=0; i<$scope.items.length; i++) {all=all+$scope.items[i]}
		for(i=0; i<$scope.items.length; i=i+3) {row = $scope.items[i]+$scope.items[i+1]+$scope.items[i+2]}
		for(i=0; i<$scope.items.length; i++) {col = $scope.items[i]+$scope.items[i+3]+$scope.items[i+6]}
		for(i=1; i<3; i++) {slash = $scope.items[-2*i]+$scope.items[4]+$scope.items[2*i]}
		if(row == 3 || col == 3 || slash == 3 )
		{
			$scope.confirm('X贏了！要不要再來一局？');
		}
		else if (row == 0 || col == 0 || slash == 0 )
		{
			$scope.confirm('O贏了！要不要再來一局？');
		}else if(all==4)
		{
			$scope.confirm('平手囉...再來一次吧？');
		}
		console.log(row);
	}
	
	$scope.whoWin = function(index){
		if( $scope.items[index] != 4 ){
			confirm('你這個學人精！有點創意好嗎');
		}else{
			$scope.pinIt(index);
		}
		$scope.checkRow()
	}
}
app.controller('OXController', OXController)