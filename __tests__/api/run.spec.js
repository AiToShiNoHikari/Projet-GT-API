const frisby = require('frisby');

const path = require('path');
const stopApp = require(path.relative(__dirname, process.cwd()+'/travis.test.js'))();

frisby.baseUrl('http://localhost:3000/API')

it('test api run', async function() {
  return frisby.get('/routeExemple')
    .expect('status', 200)
    .expect('jsonStrict', {
      result: 'success'
    })
});

beforeAll(stopApp)
