(function () {

    var jq = $(document);

    modulejs.define('ProductView', function () {

        var ProductView = function () {

            this.tblProducts = jq.find('#tblProducts');

        };

        ProductView.prototype.setAllProducts = function (lstProducts) {

            try {

                // Destroy BootstrapTable
                this.tblProducts.bootstrapTable('destroy');

                // Generate Table
                this.tblProducts.bootstrapTable({
                    data: lstProducts,
                    cache: false,
                    height: 500,
                    striped: true,
                    pagination: false,
                    //pageSize: 50,
                    //pageList: [5, 10, 15, 20, 25],
                    search: false,
                    locale: 'es-AR',
                    showColumns: false,
                    showRefresh: false,
                    minimumCountColumns: 2,
                    clickToSelect: true,

                    columns: [{

                        field: 'Id',
                        title: 'ID',
                        align: 'left',
                        valign: 'middle',
                        visible: false,
                        sortable: true
                    }, {
                        field: 'Name',
                        title: 'Nombre',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'Description',
                        title: 'Descripcion',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'UnitPrice',
                        title: 'Precio',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'Status',
                        title: 'Status',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }]

                });

            } catch (err) {

            }
        };


        return ProductView;
    });

})();