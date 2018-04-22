(function () {

    var jq = $(document);

    modulejs.define('ProductController', function () {


        var ProductController = function () {

            var ProductModel = modulejs.require('ProductModel');
            this.Model = new ProductModel();

            var ProductView = modulejs.require('ProductView');
            this.View = new ProductView();

            var Utilities = modulejs.require('Utilities');
            this.utilities = new Utilities();

            //Variables
            this.lstProducts = [];

        };

        ProductController.prototype.Init = function () {

            try {

                this.FillProducts();

            } catch (e) {

            }
        };

        ProductController.prototype.FillProducts = function () {

            try {


                var response = this.Model.getProducts();

                if (response.IsSuccessful) {

                    this.lstProducts = response.lstProducts;
                    this.View.setAllProducts(this.lstProducts);
                }
                else {
                    alert(response.Message);
                }

            } catch (e) {

            }
        };

        ProductController.prototype.createProduct = function (product) {

            try {

                var ans = this.Model.SaveProduct(product);
                ans = JSON.parse(ans);

                alert(ans.ResponseMessage);
                $('#modalNewProduct').modal('hide');
                this.FillProducts();

            } catch (e) {
                manageError(e);
            }
        };


        return ProductController;
    });


    //<<INIT CONTROLLER>>
    var ProductController = modulejs.require('ProductController');
    var productController = new ProductController();


    // EVENTS
    jq.ready(function () {

        productController.Init();

    });

    jq.on('click', '#btnSaveProduct', function (e) {

        try {
            e.preventDefault();

            var Product = {
                Name: jq.find('#txtProductName').val(),
                Description: jq.find('#txtProductDescription').val(),
                UnitPrice: jq.find('#txtProductUnitPrice').val(),
                Status: true,
                idProductType: 1
            }

            productController.createProduct(Product);

        } catch (err) {
            productController.manageError(err);
        }

    });


})();