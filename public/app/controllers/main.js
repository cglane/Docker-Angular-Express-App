
app.controller('MainCtrl', function($scope, $http) {
	function xmlConverter(xml) {
		var x2js = new X2JS();
		var json = x2js.xml_str2json( xml );
		return json;
	 }
	$scope.message = 'Welcome to your app!';
	$scope.downloadFile = () =>  {
		$http({
			method:'GET',
			cors: 'none',
			url: '/biosample.xml'
		}).then(function successCallback(response) {
			console.log(response, 'response')
			const xml = $.parseXML(response.data)
			const myJson = xmlConverter(xml)
			console.log(myJson, 'xml')
		  // this callback will be called asynchronously
		  // when the response is available
		}, function errorCallback(response) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});
	}

	$http({
		method: 'GET',
		url: '/api/todos'
	  }).then(function successCallback(response) {
		  console.log(response, 'response')
		  $scope.message = response.data[0].title
		  // this callback will be called asynchronously
		  // when the response is available
		}, function errorCallback(response) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});
});