(function () {

    var jq = $(document);

    modulejs.define('ShopView', function () {

        var ShopView = function () {

            //this.tblShops = jq.find('#tblShops');

        };

        ShopView.prototype.setAllProductsForShop = function (lstProducts) {

            try {

                var ProductsHTML = '';

                for (var i = 0; i < lstProducts.length; i++) {


                    ProductsHTML +=

                    '<div class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"> ' +
                    '    <div class="product-thumb"> ' +
                    '        <div class="image"> ' +
                    '            <a href="*"><img src="http://ocsolutions.co.in/html/organic_food/images/product/1.png" alt="image" title="image" class="img-responsive" /></a> ' +
                    '            <div class="onhover onhover1"> ' +
                    '                <ul class="list-unstyled"> ' +
                    '                    <li> ' +
                    '                        <button type="button"><i class="icon_cart"></i></button> ' +
                    '                    </li> ' +
                    '                    <li> ' +
                    '                        <button type="button"><i class="icon_heart"></i></button> ' +
                    '                    </li> ' +
                    '                    <li> ' +
                    '                        <button type="button"><i class="icon_piechart"></i></button> ' +
                    '                    </li> ' +
                    '                </ul> ' +
                    '                <button class="icons1" type="button"><i class="fa fa-bars"></i></button> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '        <div class="caption"> ' +
                    '            <h4><a href="shopdetail.html">' + lstProducts[i].Name + '</a></h4> ' +
                    '            <p class="price">' + lstProducts[i].Price +  '</p> ' +
                    '            <div class="rating"> ' +
                    '                <i class="icon_star"></i> ' +
                    '                <i class="icon_star"></i> ' +
                    '                <i class="icon_star"></i> ' +
                    '                <i class="icon_star"></i> ' +
                    '                <i class="icon_star"></i> ' +
                    '            </div> ' +
                    '            <p class="des">' + lstProducts[i].Description + '</p> ' +
                    '            <div class="button-group"> ' +
                    '                <button type="button"><i class="fa fa-expand"></i></button> ' +
                    '                <button type="button"><i class="icon_piechart"></i></button> ' +
                    '                <button type="button"><i class="icon_heart"></i></button> ' +
                    '                <button type="button"><i class="icon_cart"></i></button> ' +
                    '            </div> ' +
                    '        </div> ' +
                    '    </div> ' +
                    '</div>';

                }


                jq.find('#cntProducts').append(ProductsHTML);

            } catch (e) {

            }
        };
        
        return ShopView;
    });

})();