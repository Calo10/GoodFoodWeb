(function () {

    var jq = $(document);

    modulejs.define('ClientController', function () {


        var ClientController = function () {

            var ClientModel = modulejs.require('ClientModel');
            this.Model = new ClientModel();

            var ClientView = modulejs.require('ClientView');
            this.View = new ClientView();

            var Utilities = modulejs.require('Utilities');
            this.utilities = new Utilities();

            //Variables
            this.lstClients = [];

        };

        ClientController.prototype.Init = function () {

            try {

                this.FillClients();

            } catch (e) {

            }
        };

        ClientController.prototype.FillClients = function () {
            
            try {


                var response = this.Model.getClients();

                if (response.IsSuccessful) {

                    this.lstClients = response.lstClients;
                    this.View.setAllClients(this.lstClients);
                }
                else {
                    alert(response.Message);
                }

            } catch (e) {

            }
        };
        

        return ClientController;
    });


    //<<INIT CONTROLLER>>
    var ClientController = modulejs.require('ClientController');
    var clientController = new ClientController();


    // EVENTS
    jq.ready(function () {

        clientController.Init();
    
    });
   

})();