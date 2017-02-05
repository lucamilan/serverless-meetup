'use strict';

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

function write(payload) {
  const params = {
    TableName: process.env.DB_TABLE,
    Item: payload
  };
  return db.put(params).promise();
}

module.exports.write = (event, context, callback) => {
  const payload = {
    id: new Date().getTime().toString(),
    message: "Hello Wolf!"
  };
  write(payload).catch(callback);
};