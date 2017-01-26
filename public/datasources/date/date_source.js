import { assign } from 'lodash';
import { Datasource } from 'plugins/datagen/lib/datasource';

export class DateSource extends Datasource {
  constructor(model) {
    super(
      'date',
      'Date',
      `Defines a date field and how to generate its values`,
      'field',
      {
        field: '',
        method: 'now',
        value: '',
        startDate: '',
        endDate: ''
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
        value: this.value || '',
        startDate: this.startDate || '',
        endDate: this.endDate || ''
      }
    );
  }

  get mapping() {
    const base = super.mapping;
    const extended = {
      "type": "date"
    };
    return assign(base, _.set({}, this.field, extended));
  }
};
