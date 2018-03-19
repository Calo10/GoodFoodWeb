(function () {

    modulejs.define('HomeModel', function () {

        var HomeModel = function () {

        };

        HomeModel.prototype.SaveUser = function (user) {

            try {

                var data = new FormData();

                var user = JSON.stringify(user);
                data.append('pUser', user);

                var ans = '';

                $.ajax({
                    url: routes.SaveUser,
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
        
        return HomeModel;
    });

})();