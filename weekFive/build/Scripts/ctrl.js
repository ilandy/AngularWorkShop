
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',[myCtrl]);
	
	function myCtrl(){

		var vm = this;
		vm.today = new Date();
		vm.workPS = 0;
		vm.totalHours = 0;
		vm.debug = false;

		vm.name = "邱子繡 ilandy";

		vm.project = [
			{
				pId : 1,
				pName : "中美和",
				pOwner : "Iladny",
				isMy : true
			},
			{
				pId : 2,
				pName : "MOMA",
				pOwner : "Iladny",
				isMy : true
			},
			{
				pId : 3,
				pName : "柏緯鐵工",
				pOwner : "Iladny",
				isMy : true
			},
			{
				pId : 4,
				pName : "2手車訊",
				pOwner : "Iladny",
				isMy : false
			},
			{
				pId : 5,
				pName : "銀行公會",
				pOwner : "Iladny",
				isMy : false
			},
			{
				pId : 6,
				pName : "江湖跑堂",
				pOwner : "Iladny",
				isMy : false
			},
			{
				pId : 7,
				pName : "日月光",
				pOwner : "Iladny",
				isMy : false
			},
			{
				pId : 8,
				pName : "其它日常工作",
				pOwner : "Iladny",
				isMy : true
			}

		]; 
		vm.receivers = [
			{
				rId : 1,
				rName : '邱子繡 - ilandy',
				rEmail : 'w9874123@gmail.com',
				isSend: false
			},
			{
				rId : 2,
				rName : '張瑀 - Austin',
				rEmail : 'rockonyu@gmail.com',
				isSend: false
			},
			{
				rId : 3,
				rName : '邱俞凱 - Hal',
				rEmail : 'Hal@gmail.com',
				isSend: false
			}
		];

		vm.works = [
			{
				wName : vm.project[0],
				wHours : 0,
				wDiscript : ''
			}
		];

		vm.todayWork = 
			{
				today : vm.today,
				workList : vm.works,
				workPS : '',
				rcvEmail : []
			};
		
		vm.allWork = [];

		vm.addHours = function (item,num){
			item.wHours = parseInt(item.wHours)+num;
			if(item.wHours < 0){
				item.wHours = 0;
			}

		}
		vm.addWork = function (){
			vm.works.push({
				wName : vm.project[0],
				wHours : 0,
				wDiscript : ''
			});
		}
		vm.getSumHours = function (){
			var sum = 0;
			for(i = 0; i < vm.works.length; i++){
				sum += vm.works[i].wHours;
			}
			//console.log(sum);
			return vm.totalHours = sum;

		}
		vm.getSendWho = function(item){
			var idx = vm.receivers.indexOf(item);
				rEmail = vm.receivers[idx].rEmail,
				isSend = vm.todayWork.rcvEmail.some(function (value, index, array) {return value == rEmail ? true : false;}) == true;
			console.log(isSend);
			if(!isSend)
				vm.todayWork.rcvEmail.push(rEmail);
			else
				vm.todayWork.rcvEmail.splice(rEmail,1);


		}
		vm.sendWork = function(){
			var todayH = vm.totalHours;
			function pushWork (){
				vm.allWork.push({
					today : vm.today,
					workList : angular.copy(vm.works),
					workPS : '',
					rcvEmail : []
				});
				alert('今天辛苦囉!');
			}
			console.log(todayH)
			if(todayH < 8 && todayH != 0){
				var cfm = confirm('您今天的工時為 '+todayH+' Hr，確定要送出？');
				if(cfm)
					pushWork();
				
			}else if(todayH == 0){
				alert('請確認填寫的工時!');
			} else {
				pushWork();
			}
		}

	}
		
		
})();
