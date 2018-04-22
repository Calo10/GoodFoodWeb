(function () {

    var jq = $(document);

    modulejs.define('GlobalView', function () {

        var GlobalView = function () {



        };

        GlobalView.prototype.SetItemToGlobalCart = function (lstProducts) {

            try {
             
                jq.find("#tblGlobalCart").empty();
                var CartHTML = "";

                for (var i = 0; i < lstProducts.length; i++) {

                    CartHTML +=
                        '<tr> ' +
                        '    <td class="text-center"> ' +
                        '        <img src="@Url.Content("~/Template/images/header1/deal-img1.png")" class="img-responsive" alt="img" title="img" /> ' +
                        '    </td> ' +
                        '    <td class="text-left"> ' +
                        '        <a href="#">' + lstProducts[i].Name + '</a> ' +
                        '        <p>$ ' + lstProducts[i].UnitPrice + '</p> ' +
                        '    </td> ' +
                        '    <td class="text-center"> ' +
                        '        <button type="button" title="Remove" class="btn btn-danger btn-xs"><i class="icon_close"></i></button> ' +
                        '    </td> ' +
                        '</tr> ';

                }

                jq.find("#tblGlobalCart").append(CartHTML);


            } catch (e) {

            }
        };


        return GlobalView;
    });

})();