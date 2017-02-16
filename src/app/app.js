/**
 * Created by Administrator on 2017/2/15 0015.
 */
import 'angular';
import 'jquery';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-ui-bootstrap';
import 'angular-tooltips';
import 'bootstrap/dist/css/bootstrap.min.css';

//config
import Routers from './app.config';
//run
import runs from './app.run'
//factory
//import factorys from './app.factory'
//httpProviders
//import httpProviders from './app.httpProviders'

//iconFont
import '../images/font/iconfont.css'
//modal
import '../style/common/modal.styl'
//homePage
import homePage from './homePage/index'

const appModule = [
    /*依赖注入*/ 'ui.router','ui.bootstrap','720kb.tooltips','ngAnimate',
    ///*模块属性*/ values,runs,factorys,
    /*栏   目*/ homePage,//commonUse,article,
    ///*组   件*/ components
];
export default angular.module('myApp',appModule)
    .config(Routers)
    //.config(httpProviders)
    .name