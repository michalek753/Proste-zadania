var TAB=['adam', 'michal', 'ola'];
	document.write('Stara Tablica <br>');
for (var i = 0; i < TAB.length; i++) {
	document.write(TAB[i]+'<br>');
}
TAB[2]='nie ola';//zmiana ostatniego elementu
	document.write('Nowa Tablica <br>');
for (var i=0; i< TAB.length; i++) {
	document.write(TAB[i]+'<br>');
}
