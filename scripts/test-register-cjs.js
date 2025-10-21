const express = require('express');
const path = require('path');

console.log('CJS test start');
const app = express();
try {
  app.get('*', (req, res) => res.send('ok'));
  console.log('app.get(*) succeeded');
} catch (err) {
  console.error('app.get(*) failed:', err && err.stack ? err.stack : err);
}

try {
  app.get('/api/ping', (req, res) => res.json({ message: 'ping' }));
  console.log('app.get(/api/ping) succeeded');
} catch (err) {
  console.error('app.get(/api/ping) failed:', err && err.stack ? err.stack : err);
}

console.log('CJS test end');
