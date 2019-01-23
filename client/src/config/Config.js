const awsKey = process.env.REACT_APP_AWS_ACCESS_KEY;
const awsSecret = process.env.REACT_APP_AWS_SECRET_KEY;

console.log(awsKey);

export const config = {
  awsKey,
  awsSecret
};