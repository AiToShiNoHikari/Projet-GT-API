const frisby = require('frisby');

const url = 'localhost:3000/'

//Get all table

it ('GET All Ticket', function () {
  return frisby
    .get(url + 'ticket')
    .expect('status', 200);
});
/*
it ('GET All User', function () {
  return frisby
    .get(url + 'user')
    .expect('status', 200);
});

it ('GET All History', function () {
  return frisby
    .get(url + 'history')
    .expect('status', 200);
});

//Get element by id

it ('GET By Id Ticket', function () {
  return frisby
    .get(url + 'ticket/1')
    .expect('status', 200);
});

it ('GET By Id User', function () {
  return frisby
    .get(url + 'user/1')
    .expect('status', 200);
});

it ('GET By Id History', function () {
  return frisby
    .get(url + 'history/1')
    .expect('status', 200);
});

// Post by id

it ('POST By Id Ticket', function () {
  return frisby
    .post(url + 'ticket/1', {
      fkUserCreator : '',
      fkUserResponsible : '',
      fkUserResolver : '',
      ticketCreation : '',
      ticketResolve : '',
      ticketDelete : '',
      ticketDescription : '',
      ticketState : '',
      ticketHardware : ''
    })
    .expect('status', 200);
});

it ('POST By Id User', function () {
  return frisby
    .post(url + 'user/1', {
      userLastName  : '',
      userFirstName : '',
      userLogin : '',
      userHash : ''
    })
    .expect('status', 200);
});

it ('POST By Id History', function () {
  return frisby
    .post(url + 'history/1', {
      fkTicket  : '',
      fkUser  : '',
      historyModif  : '',
      historyDescription : '',
      historyState : ''
    })
    .expect('status', 200);
});

// Put by id

it ('PUT By Id Ticket', function () {
  return frisby
    .put(url + 'ticket/1', {
      fkUserCreator : '',
      fkUserResponsible : '',
      fkUserResolver : '',
      ticketCreation : '',
      ticketResolve : '',
      ticketDelete : '',
      ticketDescription : '',
      ticketState : '',
      ticketHardware : ''
    })
    .expect('status', 200);
});

it ('PUT By Id User', function () {
  return frisby
    .put(url + 'user/1', {
      userLastName  : '',
      userFirstName : '',
      userLogin : '',
      userHash : ''
    })
    .expect('status', 200);
});

it ('PUT By Id History', function () {
  return frisby
    .put(url + 'history/1', {
      fkTicket  : '',
      fkUser  : '',
      historyModif  : '',
      historyDescription : '',
      historyState : ''
    })
    .expect('status', 200);
});

// Put by id

it ('DELETE By Id Ticket', function () {
  return frisby
    .del(url + 'ticket/1')
    .expect('status', 204);
});

it ('DELETE By Id User', function () {
  return frisby
    .del(url + 'user/1')
    .expect('status', 204);
});

it ('DELETE By Id History', function () {
  return frisby
    .del(url + 'history/1')
    .expect('status', 204);
});*/
