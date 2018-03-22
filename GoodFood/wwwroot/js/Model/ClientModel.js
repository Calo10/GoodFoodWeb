(function () {

    modulejs.define('ClientModel', function () {

        var ClientModel = function () {

        };


        ClientModel.prototype.getClients = function () {

            try {
                
                $.ajax({
                    url: routes.getAllClients,
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


        return ClientModel;
    });

})();