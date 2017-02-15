/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
export default function ($httpProvider) {
    'ngInject';
    $httpProvider.interceptors.push('myInterceptor');
    //配置全局contentType
    $httpProvider.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest.unshift(function (data, headers) {
        // console.log(data)
        return ~headers('content-type').indexOf('application/x-www-form-urlencoded') && angular.isObject(data) ?
            jQuery.param(data) : data;
    });
}
