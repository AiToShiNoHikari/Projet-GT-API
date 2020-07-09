const frisby = require('frisby');
const Joi = frisby.Joi
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

let ticket = null

it('create Ticket', function() {
  let newTicket = randomElement.randomTicket();

  return frisby
    .post(gsBaseUrl + '/ticket', newTicket)
    .expect('status', 200)
    .expect('jsonTypesStrict', modelJoi.ticket())
    // .expect('json', newTicket)
    .then((poRes) => {
      ticket = poRes.json
    })
})

it('update Ticket', function() {
  if (ticket) {
    return frisby
      .put(gsBaseUrl + '/ticket/' + ticket.idTicket, {
        historyModif: Date.now(),
        historyDescription: randomElement.randomText(),
        historyState: 2
      })
      .expect('status', 200)
      .expect('jsonTypesStrict', modelJoi.ticket())
      // .expect('json', newTicket)
  }
})

it('GET Ticket by ID', function() {
  if (ticket) {
    return frisby
      .get(gsBaseUrl + '/ticket/' + ticket.idTicket)
      .expect('status', 200)
      .expect('jsonTypesStrict', modelJoi.ticket())
  }
});

it('GET All Ticket', function() {
  return frisby
    .get(gsBaseUrl + '/ticket')
    .expect('status', 200)
    .expect('jsonTypesStrict', Joi.array().items(modelJoi.ticket()))
});
