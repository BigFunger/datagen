import routes from 'ui/routes';
import { Dataplan } from 'plugins/datagen/lib/dataplan';
import datasourceRegistryProvider from 'plugins/datagen/datasource_registry';

routes
.when('/management/elasticsearch/datagen/', {
  template: '<datagen-edit></datagen-edit>',
  resolve: {
    dataplan: function (Private) {
      const datasourceRegistry = Private(datasourceRegistryProvider);

      const dataplan = new Dataplan(datasourceRegistry);
      window.dataplan = dataplan;
      return dataplan;
    }
  }
});
