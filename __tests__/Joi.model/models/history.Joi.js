const frisby = require('frisby');
const Joi = frisby.Joi;
const UUID = require('./UUID.Joi')

module.exports = () => Joi.object({
  idHistory: UUID().required(),
  historyModif: Joi.date().required(),
  historyDescription: Joi.string().required(),
  historyState: Joi.tinyint().required()
})
