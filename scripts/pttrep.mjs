import { parse, match, pathToRegexp } from 'path-to-regexp';

const patterns = ['*', '/api/ping', '/:bad', '/user/:id'];

for (const p of patterns) {
  try {
    console.log('Parsing pattern:', p);
    const res = parse(p);
    console.log('Parsed OK:', JSON.stringify(res));
  } catch (err) {
    console.error('Error parsing', p, err && err.stack ? err.stack : err);
  }
}
