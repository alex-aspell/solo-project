app.service('MovieService', ['$http', function($http){
    let self = this; 

    self.newReleasesArray = {list: []};

    self.getNewReleases = function() {
        $http.get('/movies')
        .then(function(response) {
            console.log('response', response.data);

        }).catch(function(error){
            console.log('Error getting new releases', error);
        })
    }

    self.getNewReleases();
}])