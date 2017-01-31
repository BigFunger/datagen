import _ from 'lodash';
import uiModules from 'ui/modules';
import template from './load_select.html';
import './load_select.less';

const app = uiModules.get('pipelines');

app.directive('loadSelect', function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      dataplanId: '='
    },
    controllerAs: 'loadSelect',
    bindToController: true,
    controller: function () {}
  };
});
