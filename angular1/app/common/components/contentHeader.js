angular.module('primeiraApp').component('contentHeader', { //por padrão, o nome muda para content-header no html
  bindings:{
    name: '@',
    small: '@',
  },
  template: `
  <section class="content-header">
    <h1>{{$ctrl.name}} <small>{{$ctrl.small}}</h1>
  </section>
  `
})
