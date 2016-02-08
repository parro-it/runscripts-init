const test = require('tape');
const runscriptsInit = require('./');

test('it work!', t => {
  const result = runscriptsInit();
  t.equal(result, 42);
  t.end();
});
