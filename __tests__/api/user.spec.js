const frisby = require('frisby');
const modelJoi = require('../Joi.model/index.Joi');
const randomElement = require('../function/randomElement.fn');

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

it('create User', function() {
  let newUser = randomElement.randomUser();
  let newUserReturn = Object.assign({}, newUser);

  delete newUserReturn.userPassword

  return frisby
    .post(gsBaseUrl + '/user', newUser)
    .expect('status', 200)
    .expect('jsonTypesStrict', modelJoi.user())
    .expect('json', newUserReturn);
});
