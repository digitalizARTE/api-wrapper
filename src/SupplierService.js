/* global ApiService */
function SupplierService() {
    // invoke the base class's constructor function to take co-ords
    // ApiService.call(this, params);
    SupplierService.prototype.constructor.apply(this, arguments);
    /**
     * create
	 * Create a supplier account.
     * @param quoteRequest
     * @param callbackHandler
     * @param errorHandler
     */
    this.create = function(supplier, callbackHandler, errorHandler) {
        return this.post('/suppliers', supplier, callbackHandler, errorHandler);
    };

	 /**
     * requestModel     
     * @return {Supplier}
     */
    this.supplierModel = function() {
        return {
  "IdCity": 0,
  "City": "",
  "Owner": {
    "FirstName": "",
    "LastName": "",
    "EMail": "",
    "Phone": "",
    "CellPhone": "",
    "Title": "",
    "LanguageCode": ""
  },
  "CompanyName": "",
  "Website": "",
  "LocationInfo": {
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
  }
};
    };
}

SupplierService.prototype = new ApiService();
SupplierService.prototype.constructor = ApiService;