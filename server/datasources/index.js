import { registerDate } from './date';
import { registerString } from './string';

export function registerDatasources(server) {
  registerDate(server);
  registerString(server);
}