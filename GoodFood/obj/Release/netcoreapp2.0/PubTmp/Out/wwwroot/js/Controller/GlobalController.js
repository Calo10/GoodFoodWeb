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
            
            this.GlobalCart = sessionStorage.getItem("GlobalCart") == null ? [] : JSON.parse(sessionStorage.getItem("GlobalCart"));

        };

        GlobalController.prototype.Init = function () {
            debugger;
            this.View.SetItemToGlobalCart(this.GlobalCart);
        };

        GlobalController.prototype.Login = function (user) {

            try {

                var ans = this.Model.Login(user);
                ans = JSON.parse(ans);

                alert(ans.ResponseMessage);

            } catch (err) {

            }

        };

        GlobalController.prototype.AddItemToGlobalCart = function (item) {

            try {
                
                this.GlobalCart.push(item);

                this.View.SetItemToGlobalCart(this.GlobalCart);

                sessionStorage.setItem('GlobalCart', JSON.stringify(this.GlobalCart));


            } catch (e) {

            }
        };

        GlobalController.prototype.GetCartList = function () {

            try {

                return this.GlobalCart;

            } catch (e) {

            }
        };

        return GlobalController;
    });


    //<<INIT CONTROLLER>>
    var GlobalController = modulejs.require('GlobalController');
    var globalController = new GlobalController();
    

    // EVENTS
    jq.ready(function () {

        globalController.Init();

    });

    jq.on('click', '#btnLogin', function (e) {

        e.preventDefault();
        
        var User = {
            Email: jq.find('#txtMailLogin').val(),
            Password: jq.find('#txtPasswordLogin').val()
        };

        globalController.Login(User);

    });

    jq.on('click', '#btnViewCartMain', function (e) {

        e.preventDefault();
        window.location.href = globalRoutes.GoToCart;
    });

    jq.on('click', '#btnContinueShopping', function (e) {
        e.preventDefault();
        window.location.href = routes.GoToShop;
    });

    

})();