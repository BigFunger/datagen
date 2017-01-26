import { StringSource } from './string_source';

export default function (server) {
  const datagen = server.plugins.datagen;

  datagen.datasources.register({
    string: {
      class: StringSource
    }
  });
}
