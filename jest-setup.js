import regeneratorRuntime from "regenerator-runtime";

module.exports = async () => {
    global.testServer = await require('./server/server');
  };