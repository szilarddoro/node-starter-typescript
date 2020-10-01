import { createLogger, transports, format } from 'winston'

const logger = createLogger({
    transports: [
        new transports.File({
            filename: `./logs/application-info.log`,
            level: 'info',
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 1,
            format: format.json()
        }),
        new transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
            handleExceptions: true
        })
    ],
    exitOnError: false
})

export default logger
