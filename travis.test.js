let fResult = null

if (process.env.TRAVIS == "true") {
  const {
    uuid
  } = require('uuidv4');
  const goApp = require('./index.js');

  let ltUUID = []
  let loTimeOut = null


  fResult = () => {
    let lsUUID = uuid()

    if (!!loTimeOut) {
      clearTimeout(loTimeOut)

      loTimeOut = null
    }

    ltUUID.push(lsUUID)

    return () => {

      ltUUID = ltUUID.filter(lsE => lsE != lsUUID);

      if (!ltUUID.length)
        loTimeOut = setTimeout(goApp.close, 10000, () => console.log("end api"));
    }
  };

} else {
  fResult = () => () => {};
}

module.exports = fResult
