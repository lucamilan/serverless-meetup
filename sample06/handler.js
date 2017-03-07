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


module.exports.bye = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Bye Bye Wolf!"
    })
  };

  callback(null, response);
};



module.exports.generic = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  };

  callback(null, response);
};
