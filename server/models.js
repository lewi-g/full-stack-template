'use strict';

const mongoose = require('mongoose');

const userEntriesSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  // password: {type: String, required: true},
  emotion: {type: String/*, required: true*/},
  comment: {type: String},
  timeOfEvent: {type: Date, default: Date.now }
});

userEntriesSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    userName: this.userName,
    emotion: this.emotion,
    comment: this.comment,
    timeOfEvent: this.timeOfEvent,
  };
};

const UserEntries = mongoose.model('UserEntry', userEntriesSchema);
module.exports.UserEntries = UserEntries;