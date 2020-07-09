const frisby = require('frisby');
const randomElement = require('../function/randomElement.fn');

require(require('path').relative(__dirname, process.cwd() + '/travis.test.js'));

const gsBaseUrl = 'http://localhost:3000/API'

let loPromise = null

let lsToken = null;

module.exports = async () => {
  if (!loPromise) loPromise = new Promise(function(resolve, reject) {
    frisby.post(gsBaseUrl + '/authentification/login', {
        userLogin: "root",
        userPassword: "root"
      }).expect('status', 200)
      .then(loRes => {
        if (!!loRes.json.token) {
          return frisby.setup({
              request: {
                headers: {
                  token: loRes.json.token
                }
              }
            }).post(gsBaseUrl + '/user', {
              userLogin: "test@test.test",
              userFirstName: "test",
              userLastName: "test",
              userPassword: "test",
              userRight: 0
            }).expect('status', 200)
            .then(loRes3 => {
              return frisby.post(gsBaseUrl + '/authentification/login', {
                  userLogin: "test@test.test",
                  userPassword: "test"
                }).expect('status', 200)
                .then(loRes2 => {
                  resolve(loRes2.json.token)
                })
            })
        } else {
          return frisby.post(gsBaseUrl + '/authentification/login', {
              userLogin: "test@test.test",
              userPassword: "test"
            }).expect('status', 200)
            .then(loRes2 => {
              resolve(loRes2.json.token)
            })
        }
      })

  });

  if (!lsToken) lsToken = await loPromise
  return lsToken;
}
//testToken
