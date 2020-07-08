let fResult = null

if (process.env.TRAVIS == "true") {
  const {
    uuid
  } = require('uuidv4');
  const goApp = require('./' + (process.env.NODE_ENV == "production" ? "dist" : "src") + '/index.js');

  let ltUUID = []
  let loTimeOut = null
  let lfResovle = null

  fResult = () => {
    let lsUUID = uuid()

    if (!!loTimeOut) {
      clearTimeout(loTimeOut)

      loTimeOut = null;

      lfResovle();
      lfResovle = null;
    }

    ltUUID.push(lsUUID)

    return () => {

      ltUUID = ltUUID.filter(lsE => lsE != lsUUID);

      if (!ltUUID.length) {

          loPromise = new Promise(function(resolve, reject) {
            lfResovle = resolve
          });

          loTimeOut = setTimeout(() => {
            goApp.close(() => console.log("end api"))

            lfResovle();
          }, 10000);

      } else {
        return new Promise(function(resolve, reject) {
          resolve()
        });
      }
    }
  };

} else {
  fResult = () => () => {};
}

module.exports = fResult
