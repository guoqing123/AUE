/**
 * Created by Administrator on 2017/2/15 0015.
 */
'use strict';
export default function($scope, $modalInstance, items){
    $scope.items = items;
    $scope.selected = {
        item : $scope.items[0]
    };
    $scope.ok = function() {
        $modalInstance.close($scope.selected);
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}