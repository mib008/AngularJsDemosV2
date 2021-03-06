﻿function PhoneListCtrl($scope, $http) {
    "use strict";

    var uri = "Scripts/Json/Phones.json";

    $http.get(uri).success(
        function (data) {
            $scope.phones = data;
        }
    );

    $scope.orderProp = 'age';
};

function GpuListCtrl($scope, $http) {
    "use strict";

    var data = [{   
        "ProductName":"GeForce GTX 980 Ti","GPUChip":"GM200","Released":"Jun 2015","Bus":"PCIe 3.0 x16","Memory":"6144 MB, GDDR5, 384 bit 1000 MHz 1753 MHz 2816 / 176 / 96" },{
        "ProductName":"GeForce GT 740 OEM","GPUChip":"GK106","Released":"Apr 2015","Bus":"PCIe 3.0 x16","Memory":"1024 MB, GDDR5, 128 bit 	1006 MHz 	1250 MHz 	384 / 32 / 16"},{
        "ProductName":"GeForce GT 710 OEM","GPUChip":"GK208","Released":"Apr 2015","Bus":"PCIe 2.0 x8","Memory":"512 MB, DDR3, 64 bit 	823 MHz 	900 MHz 	192 / 16 / 8"},{
        "ProductName":"GeForce GT 730 OEM","GPUChip":"GK107","Released":"Apr 2015","Bus":"PCIe 3.0 x16","Memory":"1024 MB, GDDR5, 128 bit 	993 MHz 	1250 MHz 	384 / 32 / 16"},{
        "ProductName":"GeForce GTX TITAN X","GPUChip":"GM200","Released":"Mar 2015","Bus":"PCIe 3.0 x16","Memory":"12288 MB, GDDR5, 384 bit 	1000 MHz 	1753 MHz 	3072 / 192 / 96"},{
        "ProductName":"GeForce GTX 960","GPUChip":"GM206","Released":"Jan 2015","Bus":"PCIe 3.0 x16","Memory":"2048 MB, GDDR5, 128 bit 	1127 MHz 	1753 MHz 	1024 / 64 / 32"},{
        "ProductName":"GeForce GT 720","GPUChip":"GK208","Released":"Sep 2014","Bus":"PCIe 2.0 x8","Memory":"1024 MB, DDR3, 64 bit 	797 MHz 	800 MHz 	192 / 16 / 8"},{
        "ProductName":"GeForce GTX 970","GPUChip":"GM204","Released":"Sep 2014","Bus":"PCIe 3.0 x16","Memory":"4096 MB, GDDR5, 256 bit 	1050 MHz 	1753 MHz 	1664 / 104 / 56"},{
        "ProductName":"GeForce GTX 980","GPUChip":"GM204","Released":"Sep 2014","Bus":"PCIe 3.0 x16","Memory":"4096 MB, GDDR5, 256 bit 	1127 MHz 	1753 MHz 	2048 / 128 / 64"
        }];

    $scope.items = data;

    $scope.ListChipsFunc = function () {
        console.log("ListChipFunc handled.");

        console.log("Chips: " + JSON.stringify($scope.items));
    };
}