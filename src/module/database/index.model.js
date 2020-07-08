const fs = require('fs');
const path = require('path');

const sequelize = require('./database');

let loResult = {};

let loDirectoriPath = path.normalize(__dirname + '/models/');

let ltFileList = fs.readdirSync(loDirectoriPath, {
  withFileTypes: true
});

for (let lsFile of ltFileList) {
  if (lsFile.isFile()) {

    let lsFileName = lsFile.name;

    let ltFileNameSplit = lsFileName.split('.');

    if (ltFileNameSplit.length == 3 && ltFileNameSplit[1] == "model" && ltFileNameSplit[2] == "js") {

      let lsModelName = ltFileNameSplit[0]
        .toLowerCase()
        .split('-')
        .reduce((lsAccumulator, lsCurrentValue) => {
          return lsAccumulator + lsCurrentValue[0].toUpperCase() + lsCurrentValue.substring(1)
        }, "")

      console.log(`load model ${lsModelName} in ${lsFileName}`);

      let loModel = require("./models/" + lsFileName);

      loResult[lsModelName] = sequelize.define('table' + lsModelName, loModel);
    }

  }
}

sequelize.sync();

module.exports = loResult;
