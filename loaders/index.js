const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

const loader =  async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');

  // ... more loaders can be here

}

module.exports = loader