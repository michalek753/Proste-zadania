function writeNum() {
	var x=parseInt(document.getElementById('start').value);
	var y=parseInt(document.getElementById('stop').value);
	if (Number.isInteger(x) && Number.isInteger(y) && x<=y){
	var res="";
	for (i=x; i<=y; i++){
		res =res + i + " ";
	}
	document.getElementById("show").innerHTML=res;
	}else document.getElementById("show").innerHTML='bledne dane';


}