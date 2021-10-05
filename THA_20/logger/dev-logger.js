const { createLogger, format, transports } = require('winston');
const { printf , combine, timestamp, colorize, errors} = format;

function devLogger() {



const logFormat = printf(({ level, message, timestamp, stack}) => {
    return `${timestamp} ${level}: ${stack || message}`;

})

return createLogger({
    //level:'debug',
    level:process.env.NODE_ENV === "development" ? "debug" : "info",
    format: combine(colorize(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss'}), errors({ stack: true}), logFormat),
    transports: [ new transports.Console() ],
});
}
module.exports = devLogger();
