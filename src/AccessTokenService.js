/* global ApiService */
function AccessTokenService() {
    // invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
    AccessTokenService.prototype.constructor.apply(this, arguments);
    /**
     * auth
	 * Gets an AccessToken to be authenticated in our system.
     * @param userName
     * @param callbackHandler
     * @param errorHandler
     */
    this.auth = function(accessTokenRequest, callbackHandler, errorHandler) {
        return this.post('/auth/accessToken', accessTokenRequest, callbackHandler, errorHandler);
    };
	
	/**
	* authModel
	*/
	this.authModel = function() {
		return {
			"ApiKey": "",
			"UserName": "",
			"Password": ""
		};
	};
}

AccessTokenService.prototype = new ApiService();
AccessTokenService.prototype.constructor = ApiService;