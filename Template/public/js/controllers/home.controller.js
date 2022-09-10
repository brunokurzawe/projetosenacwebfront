(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
      
        vm.paisesPage = paisesPage;
      
        activate();

        function activate() {
          
        }
        
        function paisesPage() {
            $location.path("/pais");
        }
    }
})();