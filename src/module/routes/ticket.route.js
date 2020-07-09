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
  }).then((poTickets) => {
    poTickets = poTickets.map(loTicketFiltre.ticketFiltre)
    res.json(poTickets);
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
      'Resolver',
      {
        model: db.History,
        include: [
          db.User
        ]
      }
    ]
  }).then((poTicket) => {
    res.json(loTicketFiltre.ticketFiltre(poTicket));
  });
});

loRouter.post('/', function(req, res) {
  db.Ticket.create({
    ticketCreation: req.body.ticketCreation,
    ticketDescription: req.body.ticketDescription,
    ticketHardware: req.body.ticketHardware,
    fkUserCreator: req.user.idUser
  }).then((poNewTicket) => {
    return db.History.create({
        historyModif: req.body.ticketCreation,
        historyDescription: req.body.historyDescription,
        historyState: req.body.historyState,
        fkUser: req.user.idUser,
        fkTicket: poNewTicket.idTicket
      })
      .then(() => db.Ticket.findOne({
        where: {
          idTicket: poNewTicket.idTicket
        },
        include: [
          'Responsible',
          'Creator',
          'Resolver',
          {
            model: db.History,
            include: [
              db.User
            ]
          }
        ]
      })).then((poTicket) => {
        res.json(loTicketFiltre.ticketFiltre(poTicket));
      });
  });
});

loRouter.put('/:idTicket', function(req, res) {
  db.History.create({
    historyModif: req.body.historyModif,
    historyDescription: req.body.historyDescription,
    historyState: req.body.historyState,
    fkUser: req.user.idUser,
    fkTicket: req.params.idTicket
  })



  /*db.Ticket.update({
      idTicket: poTicket.idTicket,
      ticketResolve: poTicket.ticketResolve,
      ticketDescription: poTicket.ticketDescription,
      ticketState: poTicket.ticketState,
    })
    .then((poTicket) => {
      res.json({
      });
    });*/
});

loRouter.delete('/:idTicket', function(req, res) {
  db.Ticket.destroy({
      where: {
        idTicket: req.params.idTicket
      }
    })
    .then((result) => {
      if (result)
        res.status(204)
      else
        res.status(404);

      res.json();
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});

module.exports = loRouter
