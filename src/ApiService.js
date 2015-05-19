/* global $ */
/* exported ApiService */
/**
* ApiService
* Representa toda la comunicación con la Api.
* @constructor
*/
function ApiService(config) {
    /// <summary></summary>
	/**
	* getFullApiUrl
	* @private
	* @param {string} path
	* @return {string}
	*/
    var getFullApiUrl = function (path) {
        var baseUrl = config.baseUrl || 'https://api.dottransfers.com/v1';
        return baseUrl + path;
    };
	
	/**
	* getAjaxConfiguration
	* @private
	* @param {string} method
	* @param {string} urlPath
	* @param {string} data
	* @param {object} data
	* @return {object}
	*/
    var getAjaxConfiguration = function (method, urlPath, data) {
        /* Estos son los headers que siempre se mandan por http. */
        var headers = {
            'Accept-Language': config.lang,
            'Access-Token': config.token
        };
        var ret = {
            dataType: 'json',
            contentType: 'application/json',
            headers: headers,
            method: method,
            url: getFullApiUrl(urlPath)
        };
		
		if(data){
			ret.data = data;
		}
		
		return ret;
    };
	
	/**
	* ajax
	* @param {string} method
	* @param {string} path
	* @param {string} data
	* @param {string} callbackHandler
	* @param {string} errorHandler
	* @return {void}
	*/
	this.ajax = function (method, path, data, callbackHandler, errorHandler) {
       var callback = callback || $.noop;
	   var errHandler = errorHandler || config.errorHandler || $.noop;
       var ajaxConfig = getAjaxConfiguration(method, path, data);
       return $.ajax(ajaxConfig).done(callbackHandler).fail(errorHandler);
	};
	
	/**
	* get
	* @param {string} path
	* @param {string} data
	* @param {string} callbackHandler
	* @param {string} errorHandler
	* @return {void}
	*/
    this.get = function (path, data, callbackHandler, errorHandler) {
       this.ajax('GET', path, data, callbackHandler, errorHandler);
	};
	
	/**
	* post
	* @param {string} path
	* @param {string} data
	* @param {string} callbackHandler
	* @param {string} errorHandler
	* @return {void}
	*/
	this.post = function (path, data, callbackHandler, errorHandler) {		
		this.ajax('POST', path, JSON.stringify(data), callbackHandler, errorHandler);
	};
	
	/**
	* put
	* @param {string} path
	* @param {string} data
	* @param {string} callbackHandler
	* @param {string} errorHandler
	* @return {void}
	*/
	this.put = function (path, data, callbackHandler, errorHandler) {
		this.ajax('PUT', path, JSON.stringify(data), callbackHandler, errorHandler);
	};
	
	/**
	* delete
	* @param {string} path
	* @param {string} data
	* @param {string} callbackHandler
	* @param {string} errorHandler
	* @return {void}
	*/
	this.delete = function (path, data, callbackHandler, errorHandler) {
		this.ajax('DELETE', path, data, callbackHandler, errorHandler);
	};
}