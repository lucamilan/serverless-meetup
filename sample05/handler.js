'use strict';

module.exports.hello = (event, context, callback) => {

  const payload = {
    message: 'Your principalId is ' + event.requestContext.authorizer.principalId
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