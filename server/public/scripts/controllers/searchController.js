myApp.controller("SearchController", ['SwapiService', function(SwapiService) {
	console.log('SearchController working as intended');
	
	const self = this;

	self.searchResults = SwapiService.searchResults;
	self.variable = SwapiService.variable;

	// RUN THE searchSwapi FUNCTION
	self.searchSwapi = (variable, keyword) => {
		SwapiService.searchSwapi(variable, keyword);
	}

	// RUN THE getVariables FUNCTION
	self.getVariables = () => {
		SwapiService.getVariables();
	}

	// RUN THE addToFavorites FUNCTION
	self.addToFavorites = (favorite) => {
		SwapiService.addToFavorites(favorite);
	}

	self.getVariables();
}]);