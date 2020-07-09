const frisby = require('frisby');
const Joi = frisby.Joi;
const UUID = require('./UUID.Joi')

function fUser() {
  return Joi.object({
    idUser: UUID().required(),
    userLastName: Joi.string().min(2).max(100).required(),
    userFirstName: Joi.string().min(2).max(100).required()
  })
}

module.exports = () => Joi.object({
  idTicket: UUID().required(),
  ticketCreation: Joi.date().required(),
  ticketResolve: Joi.date().allow(null),
  ticketDelete: Joi.date().allow(null),
  ticketDescription: Joi.string().required(),
  ticketState: Joi.number().integer().min(0).max(3).required(),
  ticketHardware: Joi.string().min(2).max(100).required(),
  Creator: fUser(),
  Responsible: fUser().allow(null),
  Resolver: fUser().allow(null)
})
