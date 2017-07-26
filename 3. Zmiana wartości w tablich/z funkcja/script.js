function printTab(TAB) {
	document.write('Stara Tablica <br>');
for (var i = 0; i < TAB.length; i++) {
	document.write(TAB[i]+'<br>');
	}
}
function changeTab(tab1, tab2) {
	document.write('zmiana w tablicy <br>');
	tab1[2]='zmieniona wartosc';
	tab2=tab1;
	printTab(tab2);
}
