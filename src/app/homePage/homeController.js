'use strict';
import 'jquery-smoove/dist/jquery.smoove.min'
import myModalContent from './myModalContent.html'
import ModalInstanceCtrl from './ModalInstanceCtrl.js'
export default class HomeCtrl{
    constructor($scope,$modal,$log){
        'ngInject';
        $(function () {
            $('.offsets').smoove({offset:'10%'});
        });


        $scope.items = [ 'item1', 'item2', 'item3' ];
        $scope.open = function() {
            var modalInstance = $modal.open({
                templateUrl : myModalContent,
                controller : ModalInstanceCtrl,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });
            modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数
                console.log('modal is opened');
            });
            modalInstance.result.then(function(result) {
                console.log(result);
            }, function(reason) {
                console.log(reason);// 点击空白区域，总会输出backdrop
                // click，点击取消，则会暑促cancel
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
}