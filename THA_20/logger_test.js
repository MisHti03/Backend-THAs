//console.log('hello');
//console.warn('warn');
//console.error('error');
//console.debug('debug');
//console.error(new Error('Something went wrong'));

const logger = require('./logger');
const Logger = require('./logger');

logger.info('info', { loggedInUser: "r@g.com", req: {w:1}, error:""});
logger.warn('warn');
logger.error('error');
logger.debug('debug');
logger.error(new Error('something went wrong'));