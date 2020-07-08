const frisby = require('frisby');

frisby.baseUrl('http://localhost:3000/API')

it('test api run', async function() {
  return frisby.get('/routeExemple')
    .expect('status', 200)
    .expect('jsonStrict', {
      result: 'success'
    })
});
