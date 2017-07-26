function Hotel(name, rooms, booked, gym, roomType) {
	this.name=name;
	this.rooms=rooms;	
	this.booked=booked;
	this.gym=gym;
	this.roomType=roomType;
	this.checkAvailability=function() {
		return this.rooms-this.booked;
		// body...
	};
}
var firstHotel= new Hotel('Hitlon', 46, 12, true, ['single', 'double']);
var secondHotel= new Hotel('Drugi Hotel', 146, 12, true, ['single', 'double']);
var thirdHotel= new Hotel('Zielony Hotel', 546, 12, true, ['single', 'double']);


var whichHotel=secondHotel;
document.getElementById('name').innerHTML=whichHotel['name'];
document.getElementById('rooms').innerHTML=whichHotel.rooms;
document.getElementById('booked').innerHTML=whichHotel['booked'];
document.getElementById('gym').innerHTML=whichHotel['gym'];
document.getElementById('roomType').innerHTML=whichHotel['roomType'];
document.getElementById('checkAvailability').innerHTML=whichHotel.checkAvailability();