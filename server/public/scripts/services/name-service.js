// CHANGE SERVICE NAME AS NEEDED FOR YOUR PROJECT
myApp.service('SERVICENAME', ['$http', function($http){
	console.log('SERVICENAME loaded');

	const self = this;
	
	self.message = "Hello from the SERVICENAME!";

}]);