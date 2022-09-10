(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window","VeiculoService","LocacaoService"];

    function HomeController($rootScope, $location, $window, VeiculoService,LocacaoService) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.paisesPage = paisesPage;
        vm.marcasPage = marcasPage;
        vm.modelosPage = modelosPage;
        vm.opcionaisPage = opcionaisPage;
        vm.clientesPage = clientesPage;
        vm.veiculosPage = veiculosPage;
        vm.locacoesPage = locacoesPage;

        vm.quantidadeVeiculos = 0;
        vm.quantidadeLocados = 0;
        vm.quantidadeDisponiveis = 0;

        activate();

        function activate() {
            VeiculoService.find().then(function(result) {
                vm.itens = result.data;
                vm.quantidadeVeiculos = vm.itens.length;
            });
            LocacaoService.find().then(function(result) {
                vm.itens = result.data;
                vm.quantidadeLocados = vm.itens.length;
                vm.quantidadeDisponiveis = vm.quantidadeVeiculos - vm.quantidadeLocados;
            });
        }

        function cidadesPage() {
            $location.path("/cidade");
        }

        function estadosPage() {
            $location.path("/estado");
        }

        function paisesPage() {
            $location.path("/pais");
        }

        function marcasPage() {
            $location.path("/marca");
        }

        function modelosPage() {
            $location.path("/modelo");
        }

        function opcionaisPage() {
            $location.path("/opcional");
        }

        function clientesPage() {
            $location.path("/cliente");
        }

        function veiculosPage() {
            $location.path("/veiculo");
        }

        function locacoesPage() {
            $location.path("/locacao");
        }
    }
})();