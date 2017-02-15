'use strict';
export default angular.module('myApp.factorys',[])
    .factory('myInterceptor', function($q) {
        var interceptor = {
            'request': function(config) {
                // ??的????
                console.log('成功的请求方法')
                return config;
                // $q.when(config);
            },
            'response': function(response) {
                // ????
                console.log('响应成功')
                return response;
                // $q.when(config);
            },
            'requestError': function(rejection) {
                // ?????错误?????错误中??????????的???promise
                console.log('请求错误，可以返回一个新的请求')
                return response;
                // ??的promise
                // ???????????rejection??????
                // return $q.reject(rejection);
            },
            'responseError': function(rejection) {
                // ?????错误?????错误中??????????的???promise
                console.log('请求错误，可以返回一个新的响应')
                return rejection;
                // ??的promise
                // ???????????rejection??????
                // return $q.reject(rejection);
            }
        };
        return interceptor;
    })
    .name