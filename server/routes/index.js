import { registerGenerate } from './generate';

export function registerRoutes(server) {
  registerGenerate(server);
}
