import { createLogger, transports } from 'winston'

const logger = createLogger({
    transports: [
        new transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
            handleExceptions: true
        }),
        new transports.File({
            filename: `application-debug.log`,
            level: 'info',
            handleExceptions: true
        })
    ],
    exitOnError: false
})

export default logger
