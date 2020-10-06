import { app, constants } from './config'
import logger from './logger'

app.listen(constants.PORT, () => logger.info(`Application listening on port ${constants.PORT}.`))
