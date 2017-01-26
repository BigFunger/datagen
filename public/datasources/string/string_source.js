import { assign } from 'lodash';
import { Datasource } from 'plugins/datagen/lib/datasource';

export class StringSource extends Datasource {
  constructor(model) {
    super(
      'string',
      'String',
      `Defines a string field and how to generate its values`,
      'field',
      {
        field: '',
        method: 'values',
        length: 100,
        values: []
      },
      model
    );
  }

  get description() {
    const chunks = [];

    if (this.field) chunks.push(` [${this.field}]`);
    return chunks.join('');
  }

  get model() {
    return assign(
      super.model,
      {
        method: this.method,
        field: this.field || '',
        length: this.length || 0,
        values: this.values || []
      }
    );
  }

  get mapping() {
    const base = super.mapping;
    const extended = {
      "type": "text"
    };
    return assign(base, _.set({}, this.field, extended));
  }
};
