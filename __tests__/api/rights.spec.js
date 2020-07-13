const frisby = require('frisby');
const Joi = frisby.Joi

it('get All rights', function() {
  return frisby
    .get(process.env.__baseUrl__ + '/rights')
    .expect('status', 200)
    .expect('jsonTypesStrict', Joi.array().items(Joi.string()))
});
