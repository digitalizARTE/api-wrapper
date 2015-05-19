function BookingService() {
	/**
	 *
/Booking
         //ratedservices
            Returns a list of the different categories of vehicles with their features and rates that can perform a transfer.
         //services
            It allows to generate a booking of transfer service.
         //services/{serviceCode}
            Get a transfer service by service code.
         //services/{serviceCode}/cancellations
            Cancel a transfer service by service code (with charges).
         //services/{serviceCode}/freecancellations
            Cancel a transfer service by service code (without charges).
	 */
	BookingService.prototype.constructor.apply(this, arguments);
	
	/**
	* ratedServices
	* Returns a list of the different categories of vehicles with their 
	* features and rates that can perform a transfer.
	* @param {object} params
	* @param {function} callbackHandler
	* @param {function} errorHandler
	* @return {void}
	*/
	this.ratedServices = function (params, callbackHandler, errorHandler) {
		this.get('/bookings/ratedservices', params, callbackHandler, errorHandler);
	};
	
	/**
	* services
	* It allows to generate a booking of transfer service.
	* @param {object} params
	* @param {function} callbackHandler
	* @param {function} errorHandler
	* @return {void}
	*/
	this.services = function (params, callbackHandler, errorHandler) {
		this.post('/bookings/services', params, callbackHandler, errorHandler);
	};
	
	/**
	* service
	* Get a transfer service by service code.
	* @param {int} serviceCode
	* @param {function} callbackHandler
	* @param {function} errorHandler
	* @return {void}
	*/
	this.service = function (serviceCode, callbackHandler, errorHandler) {
		this.post('/bookings/services/' + String(serviceCode), null, callbackHandler, errorHandler);
	};
	
	/**
	* cancellation
	* Cancel a transfer service by service code (with charges).
	* @param {int} serviceCode
	* @param {function} callbackHandler
	* @param {function} errorHandler
	* @return {void}
	*/
	this.cancellation = function (serviceCode, callbackHandler, errorHandler) {
		this.put('/bookings/services/' + String(serviceCode) + '/cancellations', null, callbackHandler, errorHandler);
	};
	
	/**
	* freecancellation
	* Cancel a transfer service by service code (without charges).
	* @param {int} serviceCode
	* @param {function} callbackHandler
	* @param {function} errorHandler
	* @return {void}
	*/
	this.freecancellation = function (serviceCode, callbackHandler, errorHandler) {
		this.put('/bookings/services/' + String(serviceCode) + '/freecancellations', null, callbackHandler, errorHandler);
	};
}

BookingService.prototype = new ApiService();
BookingService.prototype.constructor = ApiService;