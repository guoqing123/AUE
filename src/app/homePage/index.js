/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
import homeRouter from './homeRouter.js'
import './home.styl'


export default angular.module('myApp.home',[])
    .config(homeRouter)
    .name