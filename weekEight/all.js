var header = document.getElementById("hd");
var owner = "ilandy";
var ownerEl = document.getElementById("h2");
var hunger = 3; // 1 - 10 飢餓程度  10 超飽 der
var dataView = document.getElementById('json');
var el = document.getElementById('excute');
var score = [10,20,30,40];
var family = {
    dad: "",
    mom: "May",
    sis: {
        num: 2,
        name: ["helen","kumel"]
    },
    pets: ['mimi','puni'],
    addr: "楠梓區樂群路",
};


function bark() {
    console.log('bark!');
}
function whoIsOwner (man){
    ownerEl.textContent = man;
}
function myCalculator() {
    var result = document.getElementById("num1").value * document.getElementById("num2").value;
    document.getElementById("total").innerHTML = result;
    return result;
}

if (hunger >= 8) {
    console.log('我超飽 der！！');
} else if ( hunger >= 4) {
    console.log('我有點餓，我想吃沙拉');
} else {
    console.log(' 我超餓，我要吃初肉！');
}

console.log(score[0]);
console.log("我有"+ family.sis.num +"個妹妹");

header.textContent = "hello!";
header.innerHTML = "<h1>我是 ILANDY!</h1>";

bark();
bark();
function Multip() {
    var i,
        j,
        content = '<div>';
    for (i = 1; i < 11; i++){

        for (j=1; j < 10; j++ ) {
            content = content + '<p>'+ i + " x " + j + " = " + i*j + '</p>';
        }

        content = content + '</div><div>';
    }
    return content;
}

Multiplication.innerHTML = Multip();


function dataRepeat(data) {
    var i,
        dataInfo = "";
    for (i=0 ; i < data.length; i++ ) {
        dataInfo = dataInfo + '<li> 案件區域：' + data[i].ZipName_ + '<br/>' + 
                              '案件情況： ' + data[i].BeforeDesc_+ '<br/>' +
                              '案發地址：' + data[i].address_ + '<hr></li>';
    }
    return dataInfo;
}

dataView.innerHTML = dataRepeat(a);
el.addEventListener('click',function(e) {
    alert(myCalculator());
},false);
