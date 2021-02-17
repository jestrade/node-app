const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs'),
  collection = 'users';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

schema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password);
  next();
});

module.exports = mongoose.model(collection, schema);
