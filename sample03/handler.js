import Builder from './builder';

export const hello = async(event, context, callback) => {
  const builder = new Builder();
  
  callback(null, {
    message: await builder.build('Hello', 'Wolf', 'and', 'Welcome', 'Serverless')
  });
};