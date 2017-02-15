/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
import homeTemp from './home.jade'
import homeCtrl from './homeController.js'
export default function($stateProvider){
    'ngInject';
    $stateProvider.state('homePage',{
        parent: 'myApp',
        url: '/home',
        template:homeTemp,
        controller:homeCtrl,
        controllerAs:'home'
    })
}