var password="abecadło z pieca spadło";
password=password.toUpperCase();
var len=password.length;
var passwordLine="";
for (i=0;i<len;i++) {
	if(password.charAt(i)==" ") passwordLine+=" ";
	else passwordLine+="-";	
}
var passwordArray = password.split("");
var passwordLineArray = passwordLine.split("");

var mistakes=0;

function writePassword() {
	var pLA="";
	for (i=0;i<len;i++){
		pLA+=passwordLineArray[i];
	}
	document.getElementById('board').innerHTML=pLA;
}

var alphabet= new Array(35);
alphabet[0] = "A";
alphabet[1] = "Ą";
alphabet[2] = "B";
alphabet[3] = "C";
alphabet[4] = "Ć";
alphabet[5] = "D";
alphabet[6] = "E";
alphabet[7] = "Ę";
alphabet[8] = "F";
alphabet[9] = "G";
alphabet[10] = "H";
alphabet[11] = "I";
alphabet[12] = "J";
alphabet[13] = "K";
alphabet[14] = "L";
alphabet[15] = "Ł";
alphabet[16] = "M";
alphabet[17] = "N";
alphabet[18] = "Ń";
alphabet[19] = "O";
alphabet[20] = "Ó";
alphabet[21] = "P";
alphabet[22] = "Q";
alphabet[23] = "R";
alphabet[24] = "S";
alphabet[25] = "Ś";
alphabet[26] = "T";
alphabet[27] = "U";
alphabet[28] = "V";
alphabet[29] = "W";
alphabet[30] = "X";
alphabet[31] = "Y";
alphabet[32] = "Z";
alphabet[33] = "Ż";
alphabet[34] = "Ź";

function fillRightbar(){
	var letters="";
	var lit="lit"
	for(i=0;i<35;i++){
		letters+='<div id="'+lit+i+'" class="letter" onclick="check('+i+')"">'+alphabet[i]+'</div>';
		if((i+1) % 7==0) letters+='<div style="clear:both;"</div>';
	}
	document.getElementById('rightbar').innerHTML=letters;
}

function check(idd){
	var element="";
	var result=0;
	var checked='';
	var m=0;

	for(i=0;i<len;i++){
	element="lit"+idd;

		if(passwordArray[i]==alphabet[idd]){
			passwordLineArray[i]=alphabet[idd];
			result=1;
		}
	}
	if(result==1){
		document.getElementById(element).classList.add('good');
	}else{
		document.getElementById(element).classList.add('wrong');
		mistakes++;
		document.getElementById('leftbar').innerHTML='<img src="img/s'+mistakes+'.jpg">';
	}
	for(i=0;i<passwordArray.length;i++)
	{
		if (passwordArray[i] === passwordLineArray[i]) m++
			if (m==passwordArray.length) document.getElementById("rightbar").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+password+'<br /><br /><input type="button" class="reset" onclick="location.reload()" value="JESZCZE RAZ?">';
	}		
		
	if (mistakes>=9)
		document.getElementById("rightbar").innerHTML  = "Przegrana! Prawidłowe hasło: "+password+'<br /><br /><input type="button" class="reset" onclick="location.reload()" value="JESZCZE RAZ?">';

	writePassword();
}