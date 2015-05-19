function ApiDotTransfers (conf) {
	var lang = 'auto';
	var accesToken = '';
	var errorHandler = function (response) {
		console.error(response);
	},
	locations,
	booking,
	supplier,
	user,
	widget,
	accessToken;
	
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
		if(!locations){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			locations = new LocationService(config);
		}
		
		return locations;
	};
	
	this.Booking = function () {
		if(!booking){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			booking = new BookingService(config);
		}
		
		return booking;
	};
	
	this.QuoteRequest = function () {
		if(!quoteRequest){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			quoteRequest = new QuoteRequestService(config);
		}
		
		return quoteRequest;
	}
	
	this.Supplier = function () {
		if(!supplier){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			supplier = new SupplierService(config);
		}
		
		return supplier;
	}
	
	this.User = function () {
		if(!user){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			user = new UserService(config);
		}
		
		return user;
	}
	
	this.Widget = function () {
		if(!widget){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			widget = new WidgetService(config);
		}
		
		return widget;
	}	
	
	this.AccessToken = function () {
		if(!accessToken){
			var config = {
				errorHandler: errorHandler,
				lang: lang,
				token: accesToken
			};
			accessToken = new AccessTokenService(config);
		}
		
		return accessToken;
	}
}