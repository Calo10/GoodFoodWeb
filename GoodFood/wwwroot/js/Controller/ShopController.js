(function () {

    var jq = $(document);

    modulejs.define('ShopController', function () {


        var ShopController = function () {

            var ShopModel = modulejs.require('ShopModel');
            this.Model = new ShopModel();

            var ShopView = modulejs.require('ShopView');
            this.View = new ShopView();

            var GlobalController = modulejs.require('GlobalController');
            this.GlobalController = new GlobalController();

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

        ShopController.prototype.AddToCart = function (id) {

            try {
                var actualItem;

                this.lstProducts.forEach(function (element) {

                    if (element.Id == id)
                        actualItem = element;
                });

                this.GlobalController.AddItemToGlobalCart(actualItem);

            } catch (e) {

            }
        };
        

        return ShopController;
    });


    //<<INIT CONTROLLER>>
    var ShopController = modulejs.require('ShopController');
    var shopController = new ShopController();

    var GlobalController = modulejs.require('GlobalController');
    var globalController = new GlobalController();


    // EVENTS
    jq.ready(function () {

        shopController.Init();

    });

    jq.on('click', '#cntProducts .product-thumb .image .productMenuDisplay', function (e) {
 
        shopController.AddToCart((this).id);
    });

  
    

})();