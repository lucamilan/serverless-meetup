'use strict';
const verify = require('jsonwebtoken').verify;

exports.check = (event, context, callback) => {
    const token = event.authorizationToken.substring(7);
    const options = {
        audience: process.env.AUTH0_CLIENT_ID
    };
    verify(token, process.env.AUTH0_CLIENT_SECRET, options, (err, decoded) => {
        if (err) {
            callback('Unauthorized');
        } else {
            const policy = generatePolicy(decoded.sub, 'Allow', event.methodArn);
            callback(null, policy);
        }
    });
};


function generatePolicy(principalId, effect, resource) {
    const authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];
        const statementOne = {};
        statementOne.Action = 'execute-api:Invoke';
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
}