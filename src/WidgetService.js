/* global ApiService */
function WidgetService() {
    // invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
    WidgetService.prototype.constructor.apply(this, arguments);
    /**
     * config
     * @param userName
     * @param callbackHandler
     * @param errorHandler
     */
    this.config = function(key, callbackHandler, errorHandler) {
        return this.get('/widgets/' + key + '/config', null, callbackHandler, errorHandler);
    };

	 /**
     * requestModel     
     * @return {Widget}
     */
    this.supplierModel = function() {
        return null;
    };
}

WidgetService.prototype = new ApiService();
WidgetService.prototype.constructor = ApiService;