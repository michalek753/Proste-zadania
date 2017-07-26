var hotel ={
	name:'Hilton',
	rooms: 40,
	booked:25,
	gym:true,
	roomType:['twin ', 'double ', 'suite '],
	checkAvailability: function(){
		return this.rooms-this.booked;
	}
};
hotel.name="zmiana nazwy";//uaktualnienie
hotel.newProperty="nowa właściwość";//dodanie nowej właściwości
document.getElementById('name').innerHTML=hotel['name'];
document.getElementById('rooms').innerHTML=hotel['rooms'];
document.getElementById('booked').innerHTML=hotel['booked'];
document.getElementById('gym').innerHTML=hotel['gym'];
document.getElementById('roomType').innerHTML=hotel['roomType'];
document.getElementById('checkAvailability').innerHTML=hotel.checkAvailability();
document.getElementById('newProperty').innerHTML=hotel.newProperty;