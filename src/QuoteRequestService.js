/* global ApiService */
function QuoteRequestService() {
    // invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
    QuoteRequestService.prototype.constructor.apply(this, arguments);
    /**
     * request
	 * Request a transfer service quote
     * @param quoteRequest
     * @param callbackHandler
     * @param errorHandler
     */
    this.request = function(quoteRequest, callbackHandler, errorHandler) {
        return this.post('/quote/request', quoteRequest, callbackHandler, errorHandler);
    };

	 /**
     * requestModel     
     * @return {QuoteRequest}
     */
    this.requestModel = function() {
        return {
            "Contact": {
                "FirstName": "",
                "LastName": "",
                "EMail": "",
                "Phone": "",
                "CellPhone": "",
                "Title": "",
                "LanguageCode": ""
            },
            "Passenger": {
                "Company": {
                    "Name": ""
                },
                "UserName": "",
                "Links": [{
                    "Rel": "",
                    "HRef": ""
                }],
                "FirstName": "",
                "LastName": "",
                "EMail": "",
                "Phone": "",
                "CellPhone": "",
                "Title": "",
                "LanguageCode": ""
            },
            "Services": [{
                "Code": "",
                "ScheduleDate": "",
                "ScheduleDateUtc": "",
                "ServiceType": "",
                "RutePoints": [{
                    "Action": "",
                    "Order": "",
                    "Location": {
                        "Name": "",
                        "Address": "",
                        "Address2": "",
                        "Summary": "",
                        "CountryCode": "",
                        "Latitude": "",
                        "Longitude": "",
                        "Category": "",
                        "IsConcrete": false,
                        "SearchText": "",
                        "ObjectToken": "",
                        "TimeZone": {
                            "TimeZoneId": "",
                            "TimeZoneName": "",
                            "RawOffset": 0,
                            "DstOffset": 0
                        }
                    },
                    "Flight": {
                        "Airline": "",
                        "FlightNumber": "",
                        "ArrivalFrom": "",
                        "Terminal": "",
                        "MeetingArea": ""
                    }
                }],
                "TimeRequired": 0,
                "Passenger": {
                    "Company": {
                        "Name": ""
                    },
                    "UserName": "",
                    "Links": [{
                        "Rel": "",
                        "HRef": ""
                    }],
                    "FirstName": "",
                    "LastName": "",
                    "EMail": "",
                    "Phone": "",
                    "CellPhone": "",
                    "Title": "",
                    "LanguageCode": ""
                },
                "PassengerCount": "",
                "LuggageCount": "",
                "RoundTrip": false,
                "Comments": "",
                "Vehicle": {
                    "Category": "",
                    "Descrip": "",
                    "Summary": "",
                    "ImageUrl": "",
                    "MaxPax": 0,
                    "MaxLuggage": 0,
                    "Features": "",
                    "FeaturesIds": "",
                    "FinalRate": 0,
                    "Currency": "",
                    "Quantity": "",
                    "MinimumTimeRequired": 0
                },
                "FreeCancellationDueDate": "",
                "PaymentDueDate": "",
                "PaymentGatewayUrl": "",
                "PaymentConfirmationCode": "",
                "Status": "",
                "PaymentMethod": "",
                "Links": [{
                    "Rel": "",
                    "HRef": ""
                }]
            }],
            "ClientType": ""
        };
    };
}

QuoteRequestService.prototype = new ApiService();
QuoteRequestService.prototype.constructor = ApiService;