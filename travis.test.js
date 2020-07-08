if (process.env.TRAVIS == "true") {
  const goApp = require('./' + (process.env.NODE_ENV == "production" ? "dist" : "src") + '/index.js');
}
