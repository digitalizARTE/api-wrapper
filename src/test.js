

var api = new ApiDotTransfers();
	api.setupAccessToken('6836539dc24140ee9236524f268e08fc');

var locations = api.Locations();


$(function(){
	console.log(locations.find('eze'));

});