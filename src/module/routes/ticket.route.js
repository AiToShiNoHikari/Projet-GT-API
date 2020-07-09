const express = require('express');
const db = require('../database/index.model');

const loTicketFiltre = require('../function/ticketFiltre.fn');

let loRouter = express.Router();

loRouter.get('/', function(req, res) {
  db.Ticket.findAll({
    include: [
      'Responsible',
      'Creator',
      'Resolver'
    ]
  }).then((poticket) => {
    console.log(poticket);
    poticket = poticket.map(loTicketFiltre.ticketFiltre)
      console.log(poticket);
    res.json(poticket);
  });
});

loRouter.get('/:idTicket', function(req, res) {
  db.Ticket.findOne({
    where: {
      idTicket: req.params.idTicket
    },
    include: [
      'Responsible',
      'Creator',
      'Resolver'
    ]
  }).then((poticket) => {
    res.json(loTicketFiltre.ticketFiltre(poticket));
  });
});

loRouter.post('/', function(req, res) {
  db.Ticket.create({
    ticketCreation: req.body.ticketCreation,
    ticketDescription: req.body.ticketDescription,
    ticketHardware: req.body.ticketHardware,
    fkUserCreator: req.user.idUser
  }).then((poNewTicket) => {
    return db.Ticket.findOne({
      where: {
        idTicket: poNewTicket.idTicket
      },
      include: [
        'Responsible',
        'Creator',
        'Resolver'
      ]
    }).then((poTicket) => {
      res.json(loTicketFiltre.ticketFiltre(poTicket));
    });
  });
});

loRouter.put('/:idTicket', function(req, res) {
  db.Ticket.update({
      where: {
        idTicket: req.params.idTicket
      },
      include: [
        'Responsible',
        'Creator',
        'Resolver'
      ]
    })
    .then((poticket) => {
      res.json({
        idTicket: poticket.idTicket,
        ticketCreation: poticket.ticketCreation,
        ticketResolve: poticket.ticketResolve,
        ticketDelete: poticket.ticketDelete,
        ticketDescription: poticket.ticketDescription,
        ticketState: poticket.ticketState,
        ticketHardware: poticket.ticketHardware
      });
    });
});

loRouter.delete('/:idTicket', function(req, res) {
  db.Ticket.destroy({
      where: {
        idTicket: req.params.idTicket
      },
      include: [
        'Responsible',
        'Creator',
        'Resolver'
      ]
    })
    .then((poticket) => {
      res.json({
        result: 'success'
      });
    });
});

module.exports = loRouter
