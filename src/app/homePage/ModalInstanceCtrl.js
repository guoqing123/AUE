/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
export default function($scope,$uibModalInstance, items){
    'ngInject';
    $scope.items = items;
    $scope.selected = {
        item : $scope.items[0]
    };
    $scope.ok = function() {
        $uibModalInstance.close($scope.selected);
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}