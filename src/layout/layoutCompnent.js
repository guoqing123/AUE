// 'use strict';
import layoutTemp from './layout.jade'
import layoutCtrl from './layoutController'
// layoutRouter.$inject = ['$stateProvider']
export default angular.module('layout',['ui.router'])
    .component('layout',{
        template:/*`<div>eeeeeee</div>`*/layoutTemp,
        bindings:{},
        controller:layoutCtrl,
        controllerAs:'layout'
    })
    .name     