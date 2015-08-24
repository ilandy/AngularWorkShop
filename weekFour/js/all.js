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
	$scope.checkWin = function(row,val)
	{
		var flag = row.some(function (value, index, array) {return value == val ? true : false;});
		return flag;
	}

	$scope.getWinLine = function(){
		var row=[] ,col=[] ,slash=[] ,all=0 ;
		for(i=0; i<$scope.items.length; i++) {all=parseInt(all+$scope.items[i])}
		
		// 判斷row
		for(j=0; j<3; j++) 
			{			
			row[j] = parseInt($scope.items[j*3]+$scope.items[j*3+1]+$scope.items[j*3+2]);
			if($scope.checkWin(row,0) == true)
			{
				$scope.confirm('玩家1獲勝!再來一場吧？');
				break;
			}else if($scope.checkWin(row,3) == true)
				{
					$scope.confirm('玩家2獲勝!再來一場吧？');
					break;
				}
			}
		// 判斷col
		for(j=0; j<3; j++) 
		{			
			col[j] = parseInt($scope.items[j]+$scope.items[j+3]+$scope.items[j+6]);
			if($scope.checkWin(col,0) == true)
			{
				$scope.confirm('玩家1獲勝!再來一場吧？');
				break;
			}else if($scope.checkWin(col,3) == true)
				{
					$scope.confirm('玩家2獲勝!再來一場吧？');
					break;
				}
		}
		// 判斷slash
		for(j=0; j<2; j++) 
		{			
			slash[j] = parseInt($scope.items[4+(-4+j*2)]+$scope.items[4]+$scope.items[4+(4-j*2)]);
			if($scope.checkWin(slash,0) == true)
			{
				$scope.confirm('玩家1獲勝!再來一場吧？');
				break;
			}else if($scope.checkWin(slash,3) == true)
				{
					$scope.confirm('玩家2獲勝!再來一場吧？');
					break;
				}
		}
		if(all==4){
			$scope.confirm('不分勝負!再來一場吧？');
		}
	}
	
	$scope.pinSelected = function(index){
		if( $scope.items[index] != 4 ){
			alert('你這個學人精！有點創意好嗎');
		}else{
			$scope.pinIt(index);
			$scope.getWinLine();
		}
		
	}
}
app.controller('OXController', OXController)


