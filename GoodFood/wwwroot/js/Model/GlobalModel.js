(function () {

    modulejs.define('GlobalModel', function () {

        var GlobalModel = function () {

        };

        GlobalModel.prototype.Login = function (user) {

            try {

                var data = new FormData();

                var user = JSON.stringify(user);
                data.append('pUser', user);

                var ans = '';

                $.ajax({
                    url: routes.Login,
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

        return GlobalModel;
    });

})();