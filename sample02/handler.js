'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: "<html><head><title>Wolf App!</title></head><body><h1>Hello Wolf</h1></body></html>"
  };

  callback(null, response);
};
