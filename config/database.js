const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    const connection = await mongoose.connect('mongodb://root:example@localhost:27017/DB_node');
    console.log(`Connected to Mongo! Database name: "${connection.connections[0].name}"`);
  } catch (error) {
    console.error('Error connecting to mongo', error);
  }
}



module.exports = connectToMongo