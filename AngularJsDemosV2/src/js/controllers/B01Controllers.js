function PhoneListCtrl($scope) {
	$scope.phones = [{
		"name": "Nexus S",
		"snippet": "Fast just got faster with Nexus S."
	}, {
		"name": "Motorola XOOM™ with Wi-Fi",
		"snippet": "The Next, Next Generation tablet."
	}, {
		"name": "MOTOROLA XOOM™",
		"snippet": "The Next, Next Generation tablet."
	}];

	$scope.videoCards = [{
		"gpu": "GTX 980",
		"gpuVariant": "GM204-400-A1",
		"shadingUnits": "2048"
	}, {
		"gpu": "GTX 970",
		"gpuVariant": "GM204-200-A1",
		"shadingUnits": "1664"
	}, {
		"gpu": "GTX 660 Rev. 2",
		"gpuVariant": "GK104",
		"shadingUnits": "960"
	}];
}

function GeforceGraphicCardCtrl($scope) {
	$scope.videoCards = [{
		"gpu": "GTX 980",
		"gpuVariant": "GM204-400-A1",
		"shadingUnits": 2048		
	}, {
		"gpu": "GTX 970",
		"gpuVariant": "GM204-200-A1",
		"shadingUnits": 1664
	}, {
		"gpu": "GTX 660 Rev. 2",
		"gpuVariant": "GK104",
		"shadingUnits": 960
	}, {
		"gpu": "AMD Radeon R9 290",
		"gpuVariant": "Hawaii PRO",
		"shadingUnits": 2560
	}, {
		"gpu": "AMD Radeon R7 265",
		"gpuVariant": "Pitcairn PRO",
		"shadingUnits": 1024
	}, {
		"gpu": "AMD Radeon R9 280",
		"gpuVariant": "Tahiti PRO2",
		"shadingUnits": 1792
	}, {
		"gpu": "AMD Radeon R9 285",
		"gpuVariant": "Tonga PRO",
		"shadingUnits": 1792
	}];
	
	// $scope.orderProp = 'gpu';
}

function FontSizesList($scope) {
	$scope.sizes = [{
		"size": "10px"
	}, {
		"size": "15px"
	}, {
		"size": "20px"
	}, {
		"size": "25px"
	}];
}

function ScriptTest() {
	alert("Script loaded.");
}