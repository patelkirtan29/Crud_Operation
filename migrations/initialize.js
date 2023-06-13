'use strict';

const { default: mongoose } = require("mongoose");
const { con } = require("../app/config/dbConnection/dbConnection");
const { userList } = require("../app/models/userModel");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

module.exports.up = async function (next) {
  // const result = await con.collection('users').updateMany({ name: 'Raj' }, { $set: { email: "rajshah@gmail.com" } });
  // console.log(result)
  const result = con.model('user')
  console.log(result)
  // const result = await con.collection('users').find({})
  // console.log(result);
  next();
  return result;
};

module.exports.down = function (next) {
  return null;
};

exports._meta = {
  "version": 1
};
