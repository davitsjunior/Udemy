(function(){
  angular.module('primeiraApp').controller('DashboardCtrl', [ // DashboardCtrl Nome do controler
    '$http',
    DashboardController //nome da função
  ])

  function DashboardController($http) {
    const vm = this
    vm.getSummary = function(){//faz um requisição http no backend para receber o sumario dos pagamentos
      const url = 'http://localhost:3003/api/billingSummary'
        $http.get(url).then(function(response){
          const {credit = 0, debt = 0} = response.data
          vm.credit = credit
          vm.debt = debt
          vm.total = credit - debt
        })
      }
    vm.getSummary()
  }
})()
