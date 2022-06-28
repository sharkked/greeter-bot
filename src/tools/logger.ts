import winston from 'winston';

const printf = winston.format.printf(({ level, message, timestamp }) => { 
    return `${timestamp} [${level}]: ${message}`;
});

winston.addColors({
    error: "red",
    warn: "yellow",
    http: "blue",
    debug: "green",
    info: "gray",
})

winston.configure({
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.errors({ stack: true }),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        printf
    ),
    transports: [new winston.transports.Console()],
    exceptionHandlers: [new winston.transports.Console()],
    rejectionHandlers: [new winston.transports.Console()],
});

export default winston;

