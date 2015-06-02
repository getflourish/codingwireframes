var appControllers = angular.module('appControllers', []);
 

appControllers.controller('HomeController', function($http, $scope, $rootScope, $timeout) {

	// load some data

	$scope.data = {};	

	$scope.init = function () {
		$scope.loadData();
		$scope.setupKeys();
		$scope.fakeData = $scope.generateData(10);
	}

	/** 
	* Load some data from data.json. Will be available under $scope.data
	**/

	$scope.loadData = function () {
		$http.get('data.json').success(function(data) {
			$scope.data = data;
		});
	}

	$scope.setupKeys = function () {
		key('space', function(){ alert('Hello!') });
	}

	/**
	* Generates some fake data using Faker.js
	* Reference: https://github.com/marak/Faker.js/
	*
	* n: Number of data rows that will be generated
	**/

	$scope.generateData = function(n) {
 
        var fakeData = {"keys":[], "values":[]};
 
        for (var i = 0; i < n; i++) {
 
            var data = {
                "First Name": Faker.Name.firstName(),
                "Last Name": Faker.Name.lastName(),
                "City": Faker.Address.city(),
                "Color": Faker.random.array_element(["Green", "Red", "Orange"]),
                "Number": i
            }
 
            fakeData.values.push(data);
        }
        
        // push keys
		for(var k in fakeData.values[0]) fakeData.keys.push(k);

        return fakeData;
    }

	$scope.init();

});