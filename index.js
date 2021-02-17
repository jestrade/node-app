const { static } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');

require('dotenv').config();
const app = express();

const connectDB = async () => {
  await mongoose.connect(
    process.env.DB_CONN_STRING || '',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log('connected to database');
    }
  );
};

app.use(express.static('public'));

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, ['name', 'username', 'createdAt']);
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

const server = app.listen(process.env.HTTP_PORT, () => {
  console.log(`server is running in port ${server.address().port}...`);
  connectDB();
});
