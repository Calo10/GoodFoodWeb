(function () {

    var jq = $(document);

    modulejs.define('HomeController', function () {


        var HomeController = function () {

            var HomeModel = modulejs.require('HomeModel');
            this.Model = new HomeModel();

            var HomeView = modulejs.require('HomeView');
            this.View = new HomeView();

            var Utilities = modulejs.require('Utilities');
            this.utilities = new Utilities();

        };


        HomeController.prototype.registerUser = function (user) {

            var ans = this.Model.SaveUser(user);

            ans = JSON.parse(ans);

            alert(ans.ResponseMessage);

        };

        HomeController.prototype.manageError = function (err) {

        };


        return HomeController;
    });


    //<<INIT CONTROLLER>>
    var HomeController = modulejs.require('HomeController');
    var homeController = new HomeController();


    // EVENTS
    jq.on('submit', '#frmSignUp', function (e) {

        try {
            e.preventDefault();

            var User = {
                Name: jq.find('#txtName').val(),
                FirstLastName: jq.find('#txtFirstLastName').val(),
                SecondLastName: jq.find('#txtSecondLastName').val(),
                Email: jq.find('#txtEmail').val(),
                Password: jq.find('#txtPassword').val()
            }

            homeController.registerUser(User);

        } catch (err) {
            homeController.manageError(err);
        }

    });

})();