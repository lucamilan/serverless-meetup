'use strict';

const uuid = require('uuid');

module.exports.couponizer = (event, context, callback) => {
  const payload = {
    principalId: event.requestContext.authorizer.principalId,
    code: uuid.v4().split('-')[0]
  };

  callback(null, response(payload));
};

function response(payload) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': '\'Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With\'',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: typeof payload === 'string' ? payload : JSON.stringify(payload)
  };
}