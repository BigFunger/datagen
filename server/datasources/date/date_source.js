import _ from 'lodash';

export class DateSource {
  constructor(datasource) {
    this.datasource = datasource;
  }

  generate() {
    const datasource = this.datasource;

    let value
    if (datasource.method === 'now') {
      const date = new Date();
      value = date.getTime();
    }

    if (datasource.method === 'value') {
      const date = new Date(datasource.value);
      value = date.getTime();
    }

    if(datasource.method === 'range') {
      const startDate = new Date(datasource.startDate).getTime();
      const endDate = new Date(datasource.endDate).getTime();
      const range = endDate - startDate;
      value = startDate + _.random(range);
    }

    return _.set({}, datasource.field, value);
  }
};