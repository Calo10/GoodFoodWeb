(function () {

    var jq = $(document);

    modulejs.define('ShopController', function () {


        var ShopController = function () {

            var ShopModel = modulejs.require('ShopModel');
            this.Model = new ShopModel();

            var ShopView = modulejs.require('ShopView');
            this.View = new ShopView();

            var Utilities = modulejs.require('Utilities');
            this.utilities = new Utilities();

            //Variables
            this.lstProducts = [];

        };

        ShopController.prototype.Init = function () {

            try {

                this.FillProductsForShop();
          

            } catch (e) {

            }
        };

        ShopController.prototype.FillProductsForShop = function () {

            try {


                var response = this.Model.getAllProductsForShop();

                if (response.IsSuccessful) {

                    this.lstProducts = response.lstProducts;
                    this.View.setAllProductsForShop(this.lstProducts);
                }
                else {
                    alert(response.Message);
                }

            } catch (e) {

            }

        };
        

        return ShopController;
    });


    //<<INIT CONTROLLER>>
    var ShopController = modulejs.require('ShopController');
    var shopController = new ShopController();


    // EVENTS
    jq.ready(function () {

        shopController.Init();

    });


})();