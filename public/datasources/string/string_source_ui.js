import uiModules from 'ui/modules';
import template from './string_source_ui.html';
import './string_source_ui.less';

const app = uiModules.get('data-gen');

app.directive('stringSourceUi', function () {
  return {
    restrict: 'E',
    template: template,
    controller : function ($scope) {
      $scope.datasource = $scope.datasourceShell.datasource;
    }
  };
});
