'use strict';

const attr = require('dynamodb-data-types').AttributeValue;

module.exports.listen = (event, context, callback) => {
  (event.Records || []).forEach((record) => {
    const payload = attr.unwrap(record.dynamodb.NewImage);
    console.log("EVENT::", record.eventName);
    console.log("PAYLOAD::", JSON.stringify(payload));
  });
};