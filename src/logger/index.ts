import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const logger = createLogger({
    format: format.combine(format.splat(), format.simple(), format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
    transports: [
        new transports.File({
            filename: `./logs/application-info.log`,
            level: 'info',
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: 1,
            format: format.json(),
        }),
        new transports.Console({
            level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
            handleExceptions: true,
            format: format.combine(
                format.splat(),
                format.simple(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`),
                format.colorize({ all: true }),
            ),
        }),
        new DailyRotateFile({
            filename: './logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.json(),
        }),
    ],

    exitOnError: false,
})

export default logger
