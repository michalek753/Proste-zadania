function greetings() {
	// body...

	var today=new Date();
	var hours=today.getHours();
	var greetings;

	if (hours>18) {
		greetings="Good eveneing";
	}else if(hours>12){
		greetings="Good afternoon";
	}else if(hours>5){
		greeatings="Good morning";
	}else{
		greetings="Good night";
	}

	var el=document.getElementById('greetings');
	el.innerHTML=greetings;

}