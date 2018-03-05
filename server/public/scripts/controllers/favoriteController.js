myApp.controller("FavoritesController", ['SwapiService', function(SwapiService) {
	console.log('FavoritesController locked and loaded!');
	
	const self = this;

	self.favorites = SwapiService.favorites;

	// RUN THE getFavorites FUNCTION
	self.getFavorites = () => {
		SwapiService.getFavorites();
	}

	// RUN THE deleteFavorite FUNCTION
	self.deleteFavorite = (favoriteId) => {
		SwapiService.deleteFavorite(favoriteId);
	}

	self.getFavorites();
}]);