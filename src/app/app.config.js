/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
//import layoutTemp from '../layout/layout.jade'
//import layoutCtrl from '../layout/layoutController'
export default function ($stateProvider,$urlRouterProvider, $locationProvider,tooltipsConfProvider) {
    'ngInject';
    $stateProvider
        .state('myApp',{
            abstract: true,
            // url:'/myApp',
            template:layoutTemp,
            controller:layoutCtrl,
            controllerAs:'layout'
        });
    // $urlRouterProvider.when('','/myApp');
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode('true');
    //提示框
    tooltipsConfProvider.configure({
        'smart':true,
        'size':'small',
        'speed': 'fast'
        //etc...
    });
}