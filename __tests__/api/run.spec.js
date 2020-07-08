const frisby = require('frisby');

const gsBaseUrl = 'http://localhost:3000/API'

beforeAll(async () => {
  frisby.globalSetup({
    request: {
      headers: {
        token: await require(require('path').relative(__dirname, process.cwd() + '/__tests__/function/testToken.fn.js'))()
      }
    }
  });
})

it('test api run', async function() {
  return frisby.get(gsBaseUrl + '/routeExemple')
    .expect('status', 200)
    .expect('jsonStrict', {
      result: 'success'
    })
});
