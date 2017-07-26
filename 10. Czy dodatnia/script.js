
function check() {
	var x=document.getElementById('check').value;
	var res=document.getElementById('result');
	if (x>0) res.innerHTML="dodatnia";
	else if(x<0) res.innerHTML="ujemna";
	else if(x==0) res.innerHTML="zero";
	else res.innerHTML="To nie jest liczba";
}