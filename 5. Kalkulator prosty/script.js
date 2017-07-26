var button=document.getElementById('+');
button.onclick=function(){calc(this.id)};

var button=document.getElementById('-');
button.onclick=function(){calc(this.id)};

var button=document.getElementById('*');
button.onclick=function(){calc(this.id)};

var button=document.getElementById('/');
button.onclick=function(){calc(this.id)};

function calc(oper) {
	var operation=oper;
	var a=parseInt(document.getElementById('a').value);
	var b=parseInt(document.getElementById('b').value);
	var result;
	switch(oper){
		case '+':
			result=a+b;
			break;
		case '-':
			result=a-b;
			break;
		case '*':
			result=a*b;
			break;
		case '/':
			result=a/b;
			break;
	}

	el=document.getElementById('res');
	el.textContent=result;
}