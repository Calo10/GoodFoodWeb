(function () {

    modulejs.define('ProductModel', function () {

        var ProductModel = function () {

        };


        ProductModel.prototype.getProducts = function () {

            try {

                $.ajax({
                    url: routes.getAllProducts,
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

        ProductModel.prototype.SaveProduct = function (product) {

            try {

                var data = new FormData();

                var product = JSON.stringify(product);
                data.append('pProduct', product);

                var ans = '';

                $.ajax({
                    url: routes.SaveProduct,
                    type: 'POST',
                    traditional: true,
                    async: false,
                    contentType: false,
                    dataType: false,
                    processData: false,
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(thrownError);
                        ans = xhr.status;
                    },
                    beforeSend: function (jqXHR, settings) {

                    },
                    success: function (data) {
                        ans = data;
                    },
                    complete: function () {

                    },
                    data: data
                });

                return ans;


            } catch (err) {

            }


        };


        return ProductModel;
    });

})();