/* global ApiService */

	
function LocationService(params) {

	// invoke the base class's constructor function to take co-ords
    ApiService.call(this, params); 
 
	this.find = function (location, callback, errHandler) {
		return this.get('/locations', {query: location}, callback, errHandler);
	};	
};

LocationService.prototype = new ApiService();
