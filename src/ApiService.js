/* global $ */
/* exported ApiService */

function ApiService(config) {    
    /// <summary>Representa toda la comunicación con la Api.</summary>
    
    var getFullApiUrl = function (path) {        
        var baseUrl = 'https://api.dottransfers.com/v1';
        return baseUrl + path;
    };

    var getAjaxConfiguration = function (method, urlPath, data) {
        //Estos son los headers que siempre se mandan por http.
        
        var headers = {
            'Accept-Language': config.lang,
            'Access-Token': config.token
        };
        
        return {
            dataType: 'json',
            contentType: 'application/json',
            headers: headers,
            method: method,
            url: getFullApiUrl(urlPath),
            data: data
        };        
    };
      
    this.get = function (url, data, callback, errorHandler) {
        
       var errHandler = errorHandler || config.errorHandler; 
       var ajaxConfig = getAjaxConfiguration('GET', url, data);
       $.ajax(ajaxConfig).done(callback).fail(errHandler);
	};
	
	this.post = function (url, data) {
        
       var ajaxConfig = getAjaxConfiguration('POST', url, data);
       return $.ajax(ajaxConfig).fail(config.errorHandler);		
	};
	
	this.put = function (url, data) {
		
       var ajaxConfig = getAjaxConfiguration('PUT', url, data);
       return $.ajax(ajaxConfig).fail(config.errorHandler);
	};
	
	this.delete = function (url, data) {
		
       var ajaxConfig = getAjaxConfiguration('DELETE', url, data);
       return $.ajax(ajaxConfig).fail(config.errorHandler);
	};
}