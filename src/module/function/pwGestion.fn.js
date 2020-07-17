const crypto = require('crypto');

//hashage du mot de passe
module.exports = {
  fHashPW: (psPw, poUser) => {
    let lsHash = crypto.createHmac('sha512', poUser.idUser)
      .update(poUser.idUser + psPw)
      .digest('hex');

    return lsHash;
  }
}
