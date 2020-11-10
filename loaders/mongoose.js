const mongoose = require('mongoose')
const { databaseURL } = require("../config")

mong = async () => {
  const connection = await mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
  return connection.connection.db;
}

module.exports = mong