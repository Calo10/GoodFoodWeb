(function () {

    modulejs.define('ShopModel', function () {

        var ShopModel = function () {

        };


        ShopModel.prototype.getAllProductsForShop = function () {

            try {

                $.ajax({
                    url: routes.getAllProductsForShop,
                    type: 'POST',
                    traditional: true,
                    async: false,
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(thrownError);
                        ans = xhr.status;
                    },
                    beforeSend: function (jqXHR, settings) {

                    },
                    success: function (data) {
                        Response = data;
                    },
                    complete: function () {

                    }
                });

                return JSON.parse(Response);

            } catch (err) {

            }
        };


        return ShopModel;
    });

})();