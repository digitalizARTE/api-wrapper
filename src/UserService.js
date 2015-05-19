/* global ApiService */
function UserService() {
    // invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
    UserService.prototype.constructor.apply(this, arguments);
    /**
     * passwordReset
	 * Send a notification to the user with instructions to reset the password.
     * @param userName
     * @param callbackHandler
     * @param errorHandler
     */
    this.passwordReset = function(userName, callbackHandler, errorHandler) {
        return this.post('/users/' + userName + '/passwordReset', null, callbackHandler, errorHandler);
    };
}

UserService.prototype = new ApiService();
UserService.prototype.constructor = ApiService;