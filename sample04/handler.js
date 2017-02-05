import Concatenator from './concatenator';

export const hello = async(event, context, callback) => {
  const concat = new Concatenator();
  let message = '';

  try {    
    const part1 = await concat.delayed('Hello', 'Wolf');
    const part2 = await concat.delayed('Welcome', 'Serverless');
    message = await concat.immediate(part1, 'and', part2);
  } catch (error) {
    message = 'Okay, Houston, we\'ve had a problem here!';
  }

  callback(null, message);
};