import winston from 'winston';

const handler = (error) => {
  // ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' '
  let { name, message } = error;

  if (name.toLowerCase() === 'mongoerror') {
    message = '---------------------------------------------------\n';
    message += 'Mongodb Error:\nThis is likely a problem with mongodb connection.\n';
    message += 'Please ensure your mongodb is started\n';
    message += '---------------------------------------------------';
  }

  return winston.error(message);
};

export default handler;
