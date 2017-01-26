import { randomItem } from '../../lib/random_item';
import _ from 'lodash';

export class StringSource {
  constructor(datasource) {
    this.datasource = datasource;
  }

  generate() {
    const datasource = this.datasource;

    let value
    if (datasource.method === 'values') {
      value = randomItem(datasource.values);
    } else {
      const validChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      value = '';
      for (var i=0;i<datasource.length;i++) {
        value = value + validChar[_.random(0, validChar.length-1)];
      }
    }

    return _.set({}, datasource.field, value);
  }
};