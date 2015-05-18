function ApiDotTransfers (conf) {	
	
	var lang = 'auto';
	
	var accesToken = '';
	
	var errorHandler = function (response) { 
		console.error(response);
	}
	
    this.setupAccessToken = function (token) {       
        if (!token) {
            throw new Error('Should specified Acces token');
        }
		        
        accesToken = token;
    };

    this.setupLang = function (newLang) {        
        lang = newLang || 'auto';
    };

    this.setupErrorHandler = function (handler) {
        errorHandler = function (failData) {
            handler(failData);
        };
    };

	this.Locations = function () { 	
		var config = {
			errorHandler: errorHandler,
			lang: lang,
			token: accesToken
		};
				
		return new LocationService(config);
	};
}