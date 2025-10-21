import express from 'express';
import path from 'path';

console.log('Starting route registration test');
const app = express();
const distPath = path.join(process.cwd(), 'dist', 'spa');

function tryRegister(fn, desc) {
  try {
    fn();
    console.log(`OK: ${desc}`);
  } catch (err) {
    console.error(`ERROR during ${desc}:`, err && err.stack ? err.stack : err);
  }
}

tryRegister(() => app.use((req, res, next) => next()), 'noop middleware');
tryRegister(() => app.use(express.json()), 'express.json');
tryRegister(() => app.use(express.urlencoded({ extended: true })), 'express.urlencoded');
tryRegister(() => app.get('/api/ping', (_req, res) => res.json({ message: 'ping' })), '/api/ping');
tryRegister(() => app.get('/api/demo', (_req, res) => res.json({ message: 'demo' })), '/api/demo');
tryRegister(() => app.use(express.static(distPath)), `express.static(${distPath})`);
tryRegister(() => app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html'))), "get('*')");

console.log('Route registration test finished');

// Print stack
if (app._router && app._router.stack) {
  console.log('Registered layers:');
  app._router.stack.forEach((layer, i) => {
    console.log(i, layer && layer.route ? layer.route.path : (layer && layer.name) || 'anonymous');
  });
} else {
  console.log('No router stack found');
}
