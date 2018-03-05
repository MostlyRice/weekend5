myApp.service('SwapiService', ['$http', function($http) {
	console.log('SwapiService Locked and loaded!');

	const self = this;
	
	self.message = "Welcome to the SwapiService!";

	// THIS HANDLES CREATING AN ARRAY INSIDE AN OBJECT
	self.searchResults = {list:[]};
	self.favorites = {list:[]};
	self.variables = {list:[]}

	// THIS HANDLES SEARCHING SWAPI
	self.searchSwapi = (variable, keyword) => {
		$http.get('https://swapi.co/api/' + variable + '/?search='+ keyword)
		.then((response) => {
			self.searchResults.list = response.data.results;
			console.log('self.searchResults.list', self.searchResults.list);
		})
	}


	self.getFavorites();
}]);