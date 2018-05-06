
    // Creating products Module: 
    var productsModule = angular.module("productsModule", []);

    // Adding a Controller: 
    productsModule.controller("ProductsController", ["$scope",  $scope => {

      
            // Adding a Model:
            $scope.products = [
                {
                    "productID": 1,
                    "productName": "Apple",
                    "unitPrice": 3.5
                },
                {
                    "productID": 2,
                    "productName": "Banana",
                    "unitPrice": 4.7
                },
                {
                    "productID": 3,
                    "productName": "Peach",
                    "unitPrice": 2.3
                }
            ];
     

    }]);
