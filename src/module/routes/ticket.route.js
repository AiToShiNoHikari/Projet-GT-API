const express = require('express');
const db = require('../database/index.model');

let loRouter = express.Router();

loRouter.get('/', function(req, res) {
  db.Ticket.findAll().then((tickets) => {
    tickets = tickets.map(ticket => {
      return {
        idTicket: ticket.idTicket,
        ticketCreation: ticket.ticketCreation,
        ticketResolve: ticket.ticketResolve,
        ticketDelete: ticket.ticketDelete,
        ticketDescription: ticket.ticketDescription,
        ticketState: ticket.ticketState,
        ticketHardware: ticket.ticketHardware
      }
    })
    res.json(tickets);
  });
});

loRouter.get('/:idTicket', function(req, res) {
  db.Ticket.findOne({
    where: {
      idTicket: req.params.idTicket
    }
  }).then((ticket) => {
    res.json({
      idTicket: ticket.idTicket,
      ticketCreation: ticket.ticketCreation,
      ticketResolve: ticket.ticketResolve,
      ticketDelete: ticket.ticketDelete,
      ticketDescription: ticket.ticketDescription,
      ticketState: ticket.ticketState,
      ticketHardware: ticket.ticketHardware
    });
  });
});

loRouter.post('/', function(req, res) {
  db.Ticket.create(req.body)
    .then((ticket) => {
      res.json({
        idTicket: ticket.idTicket,
        ticketCreation: ticket.ticketCreation,
        ticketResolve: ticket.ticketResolve,
        ticketDelete: ticket.ticketDelete,
        ticketDescription: ticket.ticketDescription,
        ticketState: ticket.ticketState,
        ticketHardware: ticket.ticketHardware
      });
    });
});

loRouter.put('/:idTicket', function(req, res) {
  db.Ticket.update({
      where: {
        idTicket: req.params.idTicket
      }
    })
    .then((ticket) => {
      res.json({
        idTicket: ticket.idTicket,
        ticketCreation: ticket.ticketCreation,
        ticketResolve: ticket.ticketResolve,
        ticketDelete: ticket.ticketDelete,
        ticketDescription: ticket.ticketDescription,
        ticketState: ticket.ticketState,
        ticketHardware: ticket.ticketHardware
      });
    });
});

loRouter.delete('/:idTicket', function(req, res) {
  db.Ticket.destroy({
      where: {
        idTicket: req.params.idTicket
      }
    })
    .then((ticket) => {
      res.json({
        result: 'success'
      });
    });
});

module.exports = loRouter
