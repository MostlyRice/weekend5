myApp.service('SwapiService', ['$http', function($http) {
	console.log('SwapiService working as intended!');

	const self = this;

	self.message = "Welcome to the SwapiService!";

	self.searchResults = {list:[]};
	self.favorites = {list:[]};
	self.variables = {list:[]}


	self.searchSwapi = (variable, keyword) => {
		console.log('in search SWAPI');
		$http.get('https://swapi.co/api/' + variable + '/?search='+ keyword)
		.then((response) => {
			self.searchResults.list = response.data.results;
			console.log('self.searchResults.list', self.searchResults.list);
		})
	}

	self.getVariables = () => {
		$http.get('https://swapi.co/api/')
		.then((response) => {
			self.variables.list = response.data;
		})
	}

	self.getFavorites = () => {
		$http.get('/favorites')
		.then((response) => {
			self.favorites.list = response.data;
			console.log('self.favorites.list', self.favorites.list);
		})
		.catch((response) => {
			console.log('Error GETting getFavorites!');
		})
	}

	self.addToFavorites = (favorite) => {
		$http.post('/favorites', favorite)
		.then((response) => {
		})
		.catch((response) => {
			console.log('Error POSTing addToFavorites!');
		})
	}

	self.deleteFavorite = (favoriteId) => {
		$http.delete(`/favorites/${favoriteId}`)
		.then((response) => {
			self.getFavorites();
		})
		.catch((response) => {
			console.log('Error DELETing:', response);
		})
	}

	self.getFavorites();
}]);
