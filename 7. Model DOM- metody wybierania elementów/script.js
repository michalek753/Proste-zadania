document.write(document.getElementById('bb').innerHTML + '<br>');
document.write(document.querySelector('div').innerHTML + '<br>');
document.write(document.getElementsByClassName('aaa').item(3).textContent + '<br>');//wartość pierwszego elementu z klasa aaa
document.write(document.getElementsByTagName('div').length + '<br>'); // liczba
document.write(document.querySelectorAll('div')[0].innerHTML + '<br>');

function allDives(){
	var dives=document.getElementsByTagName('div');
	for(var i=0; i<dives.length;i++){
		document.write(dives[i].innerHTML + '<br>')
	}
}	
function changeClass() {
	var changClass=document.getElementsByTagName('div');
	for (var i=0;i<changClass.length;i++){
		changClass[i].className='bbb';
		document.write(changClass[i].innerHTML + '<br>');
	}

}
