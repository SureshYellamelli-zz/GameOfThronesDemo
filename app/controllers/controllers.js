
app.controller('MainController', function ($scope, $http) {

    var main = this;
    $scope.books = [];
    $scope.characters = [];
    $scope.houses = [];
    init();

    function init() {
        $http({
            method: 'GET',
            url: 'https://anapioficeandfire.com/api/books'
        }).then(function successCallback(response) {
            $scope.books = response.data;
            gBooks = response.data;
        },
            function errorCallback(response) {

            });
        $http({
            method: 'GET',
            url: 'https://anapioficeandfire.com/api/characters'
        }).then(function successCallback(response) {
            $scope.characters = response.data;
            gCharacters = response.data;

        },
            function errorCallback(response) {

            });
        $http({
            method: 'GET',
            url: 'https://anapioficeandfire.com/api/houses'
        }).then(function successCallback(response) {
            $scope.houses = response.data;
            gHouses = response.data;
        },
            function errorCallback(response) {

            });
    }


});


app.controller('DetailsController', function ($scope, $routeParams) {
    $scope.header;
    $scope.tr1;
    $scope.tr2;
    $scope.tr3;
    $scope.tr4;
    $scope.tr5;
    $scope.tr6;
    $scope.td1;
    $scope.td2;
    $scope.td3;
    $scope.td4;
    $scope.td5;
    $scope.td6;
    $scope.td7;

    init();
    function init() {
        //Grab customerID off of the route 
        var param = $routeParams.requestID;
        if (param.search('book') === 0) {
            $scope.header = "Book";
            var id = param.replace("book", "");
            for (var i = 0; i < gBooks.length; i++) {
                if (gBooks[i]["isbn"] == id) {
                    $scope.tr1 = "Name";
                    $scope.td1 = gBooks[i]["name"];
                    $scope.tr2 = "Number Of Pages";
                    $scope.td2 = gBooks[i]["numberOfPages"];
                    $scope.tr3 = "publisher";
                    $scope.td3 = gBooks[i]["publisher"];
                    $scope.tr4 = "released";
                    $scope.td4 = gBooks[i]["released"];
                    $scope.tr5 = "country";
                    $scope.td5 = gBooks[i]["country"];
                    $scope.tr6 = "isbn";
                    $scope.td6 = gBooks[i]["isbn"];
                    $scope.td7 = gBooks[i]["authors"];
                }
            }
        } else if (param.search('character') === 0) {
            $scope.header = "Character";
            var id = param.replace("character", "");
            var temp = id.replace("[\"", "").replace("\"]", "");
            for (var i = 0; i < gCharacters.length; i++) {

                if (gCharacters[i]["aliases"] == temp) {
                    $scope.tr1 = "Name";
                    $scope.td1 = gCharacters[i]["name"];
                    $scope.tr2 = "Gender";
                    $scope.td2 = gCharacters[i]["gender"];
                    $scope.tr3 = "Culture";
                    $scope.td3 = gCharacters[i]["culture"];
                    $scope.tr4 = "Aliases";
                    $scope.td4 = gCharacters[i]["aliases"];
                    $scope.tr5 = "Born";
                    $scope.td5 = gCharacters[i]["born"];
                    $scope.tr6 = "Spouse";
                    $scope.td6 = gCharacters[i]["spouse"];
                    $scope.td7 = gCharacters[i]["playedBy"];
                }
            }

        } else {
            $scope.header = "House";
            var id = param.replace("house", "");
            for (var i = 0; i < gHouses.length; i++) {
                if (gHouses[i]["name"] == id) {
                    $scope.tr1 = "Name";
                    $scope.td1 = gHouses[i]["name"];
                    $scope.tr2 = "Region";
                    $scope.td2 = gHouses[i]["region"];
                    $scope.tr3 = "coatOfArms";
                    $scope.td3 = gHouses[i]["coatOfArms"];
                    $scope.tr4 = "words";
                    $scope.td4 = gHouses[i]["words"];
                    $scope.tr5 = "seats";
                    $scope.td5 = gHouses[i]["seats"];
                    $scope.tr6 = "founded";
                    $scope.td6 = gHouses[i]["founded"];
                    $scope.td7 = gHouses[i]["currentLord"];
                }
            }
        }
    }
});


app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});


var gBooks = [];
var gCharacters = [];
var gHouses = [];

