const goErrorList = require('../error.list');

//rôles des administrateurs
let gtRigth = [
  'admin',
  'creator',
  'redactor',
  'reader'
]

//si autant rôle reconnu
function fSendBadRigth(pRes) {
  pRes.json({
    error: goErrorList.noAuth
  });
}

module.exports = {
  filter: (psActionType) => {
    switch (psActionType) {
      case 'createUser':
        return (req, res, next) => {
          if (req.token.indexOf('temp_') == 0) {
            next();
          } else {
            switch (gtRigth[req.user.userRight]) {
              case 'admin':
                next();
                break;
              default:
                fSendBadRigth(res);
            }
          }
        }
        break;
      default:
        return (req, res, next) => next()
    }
  },
  rigth: (psRigth) => gtRigth.findIndex(psE => psRigth == psE),
  listRigth: () => gtRigth
}
