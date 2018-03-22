(function () {

    var jq = $(document);

    modulejs.define('ClientView', function () {

        var ClientView = function () {

            this.tblClients = jq.find('#tblClients');

        };

        ClientView.prototype.setAllClients = function (lstClients) {

            try {

                // Destroy BootstrapTable
                this.tblClients.bootstrapTable('destroy');

                // Generate Table
                this.tblClients.bootstrapTable({
                    data: lstClients,
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
                        field: 'FirstLastName',
                        title: 'Apellido',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'SecondLastName',
                        title: 'Apellido',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }, {
                        field: 'Email',
                         title: 'Email',
                        align: 'left',
                        valign: 'middle',
                        sortable: true
                    }]

                });

            } catch (err) {

            }
        };


        return ClientView;
    });

})();