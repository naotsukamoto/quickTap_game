var color = ["red","blue","yellow","green"];
var setColors = [];
var nokori = 20;

//色をランダムに入れる
function start(){
	for(var i=1;i<7;i++){
		var rand = Math.floor(Math.random()*color.length);
		setColors.push(color[rand]);
		document.getElementById("div"+i).style.backgroundColor = setColors[i-1];
	}
}

//一番下の色を消して一番上に色を追加する
function change(num){

	check(num);

	setColors.splice(0,1)
	var rand = Math.floor(Math.random()*color.length);
	setColors.push(color[rand]);
	for(var i=1;i<7;i++){
		document.getElementById("div"+i).style.backgroundColor = setColors[i-1];
	}
}

//色の判定
function check(num){
	if(color[num] == setColors[0])
		nokori--;

	if(nokori == 0){
		alert("クリア！！");
		restart();
	}

	document.getElementById("nokori").textContent = nokori;
}

//ゲームの初期化
function restart(){
	nokori = 20;
	document.getElementById("nokori").textContent = nokori;

}

