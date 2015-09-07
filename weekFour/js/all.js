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
			$window.location.reload();
		}
	} // -> 重新來一次
	$scope.checkWin = function(row){
		if(row.some(function (value, index, array) {return value == 0 ? true : false;}) == true){
				$scope.confirm('玩家1獲勝!再來一場吧？');
			}else if(row.some(function (value, index, array) {return value == 3 ? true : false;}) == true){
				$scope.confirm('玩家2獲勝!再來一場吧？');
			}
	} // -> 確認比對取得數值是否為 true 
	$scope.getWinLine = function(){
		var row=[] ,col=[] ,slash=[], whoLined=[row,col,slash] ,all=0 ;
		for(i=0; i<$scope.items.length; i++) {all=all+$scope.items[i]}//判斷全滿
		for(j=0; j<3; j++){	
			row[j] = parseInt($scope.items[j*3]+$scope.items[j*3+1]+$scope.items[j*3+2]); // 判斷row
			col[j] = parseInt($scope.items[j]+$scope.items[j+3]+$scope.items[j+6]); // 判斷col
			if(j<2){ slash[j] = parseInt($scope.items[4+(-4+j*2)]+$scope.items[4]+$scope.items[4+(4-j*2)]);}// 判斷slash
			$scope.checkWin(whoLined[j]);
		}
		if(all==4){
			$scope.confirm('不分勝負!再來一場吧？');
		}
	}// -> 取得加總 行、列、斜線 全部連線值並判斷
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


