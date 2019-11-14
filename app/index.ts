import { app, constants } from './config'

app.listen(constants.PORT, () => {
    console.log(`Application listening on port ${constants.PORT}.`)
})
