import uiModules from 'ui/modules';
import template from './datagen_edit.html';
import generateDataTemplate from './generate_data_partial.html';
import { DatagenProvider } from 'plugins/datagen/service';
import './datagen_edit.less';

const app = uiModules.get('datagen');

app.directive('datagenEdit', function () {
  return {
    restrict: 'E',
    template: template,
    controller: function ($scope, $route, Private) {
      $scope.dataplan = $route.current.locals.dataplan;
      const service = Private(DatagenProvider);

      $scope.topNavOpts = {
        dataplan: $scope.dataplan,
        generateData: () => {
          service.generate($scope.dataplan.model)
          .catch((er) => {
            console.log(er);
          });
          }
        };

      $scope.topNavMenu = [{
        key: 'generate data',
        template: generateDataTemplate,
        description: 'Generate Data'
      }];
    }
  };
});
