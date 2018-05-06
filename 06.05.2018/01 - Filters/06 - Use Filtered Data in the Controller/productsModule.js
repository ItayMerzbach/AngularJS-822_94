
    // Creating products Module: 
    var productsModule = angular.module("productsModule", []);

    // Adding a Controller: 
    productsModule.controller("ProductsController", ["$scope", function ($scope) {


            // Adding it as a Model:
            $scope.products = [
                {
                    "productID": 1,
                    "productName": "Apple",
                    "unitPrice": 3.5
                },
                {
                    "productID": 2,
                    "productName": "Banana",
                    "unitPrice": 4.117
                },
                {
                    "productID": 3,
                    "productName": "Peach",
                    "unitPrice": 2.113
                }
            ];

			//  $scope.filteredProducts is the filteredProducts declare in the view, containing only the filtered products.
			$scope.getAvg = ()=>{
				
				var sum = 0;
				
				for(var i = 0; i <  $scope.filteredProducts.length; i++) {
					sum +=  $scope.filteredProducts[i].unitPrice;
				}
				
				var avg = sum /  $scope.filteredProducts.length;
				
				return avg; // Returning the avg without rounding it, and the round will be in the UI by a filter.
			};
			
      

    }]);

