import { StringSource } from './string_source';

export function registerString (server) {
  const datagen = server.plugins.datagen;

  datagen.datasources.register({
    string: {
      class: StringSource
    }
  });
}
