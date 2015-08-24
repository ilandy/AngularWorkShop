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
		var row1 = $scope.items[0]+$scope.items[1]+$scope.items[2],
		row2 = $scope.items[3]+$scope.items[4]+$scope.items[5],
		row3 = $scope.items[6]+$scope.items[7]+$scope.items[8],
		col1 = $scope.items[0]+$scope.items[3]+$scope.items[6],
		col2 = $scope.items[1]+$scope.items[4]+$scope.items[7],
		col3 = $scope.items[2]+$scope.items[5]+$scope.items[8],
		slash1 = $scope.items[0]+$scope.items[4]+$scope.items[8],
		slash2 = $scope.items[2]+$scope.items[4]+$scope.items[6],
		all = 0;
		for(i=0;i<$scope.items.length;i++){
			all=all+$scope.items[i]}

		if(row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || slash1 == 3 ||slash2 == 3)
		{
			$scope.confirm('X贏了！要不要再來一局？');
		}
		else if (row1 == 0 || row2 == 0 || row3 == 0 || col1 == 0 || col2 == 0 || col3 == 0 || slash1 == 0 ||slash2 == 0)
		{
			$scope.confirm('O贏了！要不要再來一局？');
		}else if(all==4)
		{
			$scope.confirm('平手囉...再來一次吧？');
		}

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