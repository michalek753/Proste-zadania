var liczbaKuponow=0;
var losowanie= new Array(6);


function draw() {
	liczbaKuponow=0;
	los= new Array(6);
	var element="";
	for (i=1;i<7;i++){
		element="digit"+i;
		los[i]=Math.floor(Math.random()*20)+1;
		for(j=1;j<i;j++){
			if(los[i]==los[j]) i--;
		}
		document.getElementById(element).innerHTML=los[i];
	}
}

function check() {
	var points=0;
	for(i=1;i<7;i++){
		for(j=1;j<7;j++){
			if(los[i]==losowanie[j]) points+=1;
		}
	}
	if(points==6) document.getElementById('nOfCupons').innerHTML=liczbaKuponow;
	else cupons();
}





function cupons(){
	liczbaKuponow+=1;
	for (i=1;i<7;i++){
		losowanie[i]=Math.floor(Math.random()*20)+1;
		for(j=1;j<i;j++){
			if(losowanie[i]==losowanie[j]) i--;
		}
	}

	check();
}

function start() {
	cupons();
	

}