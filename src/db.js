const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mvp', { useUnifiedTopology: true, useNewUrlParser: true }).catch(err => console.log('err on connect', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('successfully opened mongoDB');

  const countSchema = new mongoose.Schema({}, {
    collection: 'count'
  });

  const Count = mongoose.model('Count', countSchema);
});

export default db;