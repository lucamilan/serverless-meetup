import Builder from './builder';

export const hello = async(event, context, callback) => {
  const builder = new Builder();
  const part1 = await builder.build('Hello', 'Wolf');
  const part2 = await builder.build('Welcome', 'Serverless');
  
  callback(null, {
    message: await builder.build(part1, 'and', part2)
  });
};