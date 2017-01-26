import registry from 'plugins/datagen/datasource_registry';
import { StringSource } from './string_source';
import './string_source_ui';

registry.register(() => {
  return {
    id: 'string',
    name: 'String',
    ViewModel: StringSource
  };
});
