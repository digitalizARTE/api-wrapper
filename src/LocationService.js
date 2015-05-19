/* global ApiService */
function LocationService() {
	// invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
	LocationService.prototype.constructor.apply(this, arguments);
	/**
	* find
	* @param location
	* @param callbackHandler
	* @param errorHandler
	*/
	this.find = function (location, callbackHandler, errorHandler) {
		return this.get('/locations', {query: location}, callbackHandler, errorHandler);
	};
};
LocationService.prototype = new ApiService();
LocationService.prototype.constructor = ApiService;