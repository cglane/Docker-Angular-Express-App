
app.controller('MainCtrl', function($scope, $http, ) {
	$scope.message = 'Welcome to your app!';
	$scope.details = []
	const details = []
	const parseXml = (xml) => {
		$http({
			method:'POST',
			url:"/api/readXml",
			data: {xml: xml}
		}).then(function successCallback(el){
			for (sample of el.data){
				for (item of Object.keys(sample)) {
					details.push(`${item}: ${sample[item]}`)
				}
				details.push('-------------')
			}
			$scope.details = details;
		}, function errorCallback(response) {
			console.log('error')
		})
	}
	$scope.downloadFile = () =>  {
		$http({
			method:'GET',
			url: '/biosample.xml'
		}).then(function successCallback(response) {
			const xml = $.parseXML(response.data)
			parseXml(response.data)
		  // this callback will be called asynchronously
		  // when the response is available
		}, function errorCallback(response) {
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});
	}

});