import { registerGenerate } from './generate';
import { registerLoadDataplan } from './load_dataplan';
import { registerSaveDataplan } from './save_dataplan';

export function registerRoutes(server) {
  registerGenerate(server);
  registerLoadDataplan(server);
  registerSaveDataplan(server);
}
