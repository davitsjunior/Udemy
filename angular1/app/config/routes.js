angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider){
    $stateProvider.state('dashboard',{ //referência no ui-sref no menu e joga na index ui-view
      url: "/dashboard", //caminha que fica no endereço do browser
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles",
      templateUrl: "billingCycle/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
  }
])
