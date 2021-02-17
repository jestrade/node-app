const mongoose = require('mongoose');
const User = require('./user');

require('dotenv').config();

const users = [
  { name: 'Test User 1', username: 'username-1' },
  { name: 'Test User 2', username: 'username-2' },
];

(async () => {
  await mongoose.connect(
    process.env.DB_CONN_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('connected to database ...');
    }
  );

  console.log('insert users ...');
  for (let user of users) {
    user.password = Date.now().toString();
    console.log(user);
    await new User(user).save();
  }

  mongoose.connection.close();
  console.log('disconnect.');
})();
