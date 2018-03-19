(function () {

    var jq = $(document);

    modulejs.define('GlobalController', function () {


        var GlobalController = function () {

            var GlobalModel = modulejs.require('GlobalModel');
            this.Model = new GlobalModel();

            var GlobalView = modulejs.require('GlobalView');
            this.View = new GlobalView();

            var Utilities = modulejs.require('Utilities');
            this.utilities = new Utilities();

        };


        GlobalController.prototype.Login = function (user) {

            try {

                var ans = this.Model.Login(user);
                ans = JSON.parse(ans);

                alert(ans.ResponseMessage);

            } catch (err) {

            }

        };


        return GlobalController;
    });


    //<<INIT CONTROLLER>>
    var GlobalController = modulejs.require('GlobalController');
    var globalController = new GlobalController();
    

    // EVENTS
    jq.on('click', '#btnLogin', function (e) {

        e.preventDefault();
        
        var User = {
            Email: jq.find('#txtMailLogin').val(),
            Password: jq.find('#txtPasswordLogin').val()
        };

        globalController.Login(User);

    });

})();