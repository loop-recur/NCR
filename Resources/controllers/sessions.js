Controllers.sessions = (function() {
	var Api = RestApi("sessions");
	
	var index = Api.all;
		
	return {index : index}
})();
