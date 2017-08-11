'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://localhost/emotions';
exports.TEST_DATABASE_URL = (
  process.env.TEST_DATABASE_URL ||
  'mongodb://localhost/test-emotions');
exports.PORT = process.env.PORT || 8081;

console.log('mlab', exports.DATABASE_URL);
